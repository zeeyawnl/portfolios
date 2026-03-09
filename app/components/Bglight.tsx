"use client";

import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

const DEFAULT_COLOR = '#ffffff';

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const getAnchorAndDir = (origin: string, w: number, h: number) => {
  const outside = 0.2;
  switch (origin) {
    case 'top-left':
      return { anchor: [0, -outside * h], dir: [0, 1] };
    case 'top-right':
      return { anchor: [w, -outside * h], dir: [0, 1] };
    case 'left':
      return { anchor: [-outside * w, 0.5 * h], dir: [1, 0] };
    case 'right':
      return { anchor: [(1 + outside) * w, 0.5 * h], dir: [-1, 0] };
    case 'bottom-left':
      return { anchor: [0, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-center':
      return { anchor: [0.5 * w, (1 + outside) * h], dir: [0, -1] };
    case 'bottom-right':
      return { anchor: [w, (1 + outside) * h], dir: [0, -1] };
    default: // "top-center"
      return { anchor: [0.5 * w, -outside * h], dir: [0, 1] };
  }
};

const LightRays = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 1,
  lightSpread = 1,
  rayLength = 1.5,
  pulsating = false,
  pulseSpeed = 1.0,
  fadeDistance = 1.0,
  saturation = 1.0,
  followMouse = true,
  mouseInfluence = 0.1,
  noiseAmount = 0.0,
  distortion = 0.0,
  particleDensity = 0,
  connectionLines = false,
  geometry = "",
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const smoothMouseRef = useRef({ x: 0.5, y: 0.5 });
  const animationIdRef = useRef<number | null>(null);
  const meshRef = useRef<any>(null);
  const cleanupFunctionRef = useRef<(() => void) | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    observerRef.current = new IntersectionObserver(
      entries => { setIsVisible(entries[0].isIntersecting); },
      { threshold: 0.1 }
    );
    observerRef.current.observe(containerRef.current);
    return () => { observerRef.current?.disconnect(); observerRef.current = null; };
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    if (cleanupFunctionRef.current) { cleanupFunctionRef.current(); cleanupFunctionRef.current = null; }

    const initializeWebGL = async () => {
      if (!containerRef.current) return;
      await new Promise(resolve => setTimeout(resolve, 10));
      if (!containerRef.current) return;

      const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
      rendererRef.current = renderer;
      const gl = renderer.gl;
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      while (containerRef.current.firstChild) containerRef.current.removeChild(containerRef.current.firstChild);
      containerRef.current.appendChild(gl.canvas);

      const vert = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

      // Reworked fragment shader for the ReactBits "god ray" aesthetic:
      // - Multiple sharp ray streaks with hash-based variation
      // - Strong angular falloff for discrete beams
      // - Soft radial fade and depth falloff
      // - Clean bright center bloom at source
      const frag = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;
uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

// ---- Utility ----------------------------------------------------------------
float hash(float n) { return fract(sin(n) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// Smooth noise
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash2(i), hash2(i + vec2(1,0)), u.x),
             mix(hash2(i + vec2(0,1)), hash2(i + vec2(1,1)), u.x), u.y);
}

// ---- Single ray beam --------------------------------------------------------
float rayBeam(
  vec2 source,       // ray origin in px
  vec2 dir,          // normalised direction
  vec2 coord,        // current fragment in px
  float seed,        // unique per-beam seed
  float speed        // animation speed
) {
  vec2 toFrag = coord - source;
  float dist   = length(toFrag);

  // Angle between ray dir and fragment dir
  vec2 fragDir = normalize(toFrag);
  float cosA   = dot(fragDir, dir);

  // Spread: sharper beams → each one is a narrow cone
  float spreadPow = 12.0 / max(lightSpread, 0.05);
  float angular   = pow(max(cosA, 0.0), spreadPow);

  // Animated angular wobble — gives the "shimmer" feel
  float wobble = sin(cosA * 8.0 * seed + iTime * speed * 1.3) * 0.5 + 0.5;
  wobble       = mix(1.0, wobble, 0.35);

  // Distance falloff
  float maxDist   = iResolution.x * rayLength;
  float distFade  = clamp(1.0 - dist / maxDist, 0.0, 1.0);
  distFade        = distFade * distFade; // quadratic — bright near source

  // Fade zone
  float fadeDist  = iResolution.x * fadeDistance;
  float fadeFade  = clamp((fadeDist - dist) / fadeDist, 0.0, 1.0);

  // Optional pulsating
  float pulse = pulsating > 0.5 ? (0.75 + 0.25 * sin(iTime * speed * 2.5 + seed)) : 1.0;

  return angular * wobble * distFade * fadeFade * pulse;
}

// ---- Main -------------------------------------------------------------------
void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  // Flip Y so origin directions feel natural (y=0 at top)
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);

  // Mouse-influenced direction
  vec2 finalDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mScreen = mousePos * iResolution.xy;
    vec2 mDir    = normalize(mScreen - rayPos);
    finalDir     = normalize(mix(rayDir, mDir, mouseInfluence));
  }

  // Distortion warp on coord
  vec2 warpCoord = coord;
  if (distortion > 0.0) {
    float warp = sin(coord.x * 0.003 + iTime * 0.7) * distortion * 20.0;
    warpCoord.y += warp;
  }

  // Stack N individual ray beams — each has a unique seed that controls its
  // angular offset, speed and brightness; this creates the "multiple streaks" look.
  const int NUM_RAYS = 12;
  float total = 0.0;

  for (int i = 0; i < NUM_RAYS; i++) {
    float seed = hash(float(i) * 137.5 + 1.0);   // 0..1 unique per beam

    // Slightly rotate finalDir per beam to spread them angularly
    float angle  = (seed - 0.5) * lightSpread * 0.6;
    float cosR   = cos(angle);
    float sinR   = sin(angle);
    vec2  beamDir = vec2(
      finalDir.x * cosR - finalDir.y * sinR,
      finalDir.x * sinR + finalDir.y * cosR
    );

    float speed   = raysSpeed * (0.6 + seed * 0.8);
    float contrib = rayBeam(rayPos, beamDir, warpCoord, seed * 100.0, speed);

    // Each beam has its own intensity — keeps them looking distinct
    float intensity = 0.5 + 0.5 * hash(float(i) * 73.1);
    total += contrib * intensity;
  }

  // Normalise / compress
  total = total / float(NUM_RAYS) * 2.2;
  total = clamp(total, 0.0, 1.0);

  // Gamma lift → looks more like a real light scatter
  total = pow(total, 0.75);

  // Optional grain / noise
  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.008 + iTime * 0.08);
    total  *= 1.0 - noiseAmount * (1.0 - n) * 0.5;
  }

  // Subtle source glow — bright halo right at the origin
  float glowDist  = length(warpCoord - rayPos);
  float glow      = exp(-glowDist / (iResolution.x * 0.07)) * 0.5;
  total           = clamp(total + glow, 0.0, 1.0);

  // Colour
  vec3 col = raysColor * total;

  // Saturation tweak
  if (saturation != 1.0) {
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    col       = mix(vec3(lum), col, saturation);
  }

  fragColor = vec4(col, total);
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`;

      const uniforms = {
        iTime:          { value: 0 },
        iResolution:    { value: [1, 1] },
        rayPos:         { value: [0, 0] },
        rayDir:         { value: [0, 1] },
        raysColor:      { value: hexToRgb(raysColor) },
        raysSpeed:      { value: raysSpeed },
        lightSpread:    { value: lightSpread },
        rayLength:      { value: rayLength },
        pulsating:      { value: pulsating ? 1.0 : 0.0 },
        fadeDistance:   { value: fadeDistance },
        saturation:     { value: saturation },
        mousePos:       { value: [0.5, 0.5] },
        mouseInfluence: { value: mouseInfluence },
        noiseAmount:    { value: noiseAmount },
        distortion:     { value: distortion },
      };
      uniformsRef.current = uniforms;

      const geometry = new Triangle(gl);
      const program  = new Program(gl, { vertex: vert, fragment: frag, uniforms });
      const mesh     = new Mesh(gl, { geometry, program });
      meshRef.current = mesh;

      const updatePlacement = () => {
        if (!containerRef.current || !renderer) return;
        renderer.dpr = Math.min(window.devicePixelRatio, 2);
        const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
        renderer.setSize(wCSS, hCSS);
        const dpr = renderer.dpr;
        const w = wCSS * dpr, h = hCSS * dpr;
        uniforms.iResolution.value = [w, h];
        const { anchor, dir } = getAnchorAndDir(raysOrigin, w, h);
        uniforms.rayPos.value = anchor;
        uniforms.rayDir.value = dir;
      };

      const loop = (t: number) => {
        if (!rendererRef.current || !uniformsRef.current || !meshRef.current) return;
        uniforms.iTime.value = t * 0.001;
        if (followMouse && mouseInfluence > 0.0) {
          const s = 0.92;
          smoothMouseRef.current.x = smoothMouseRef.current.x * s + mouseRef.current.x * (1 - s);
          smoothMouseRef.current.y = smoothMouseRef.current.y * s + mouseRef.current.y * (1 - s);
          uniforms.mousePos.value = [smoothMouseRef.current.x, smoothMouseRef.current.y];
        }
        try {
          renderer.render({ scene: mesh });
          animationIdRef.current = requestAnimationFrame(loop);
        } catch (e) {
          console.warn('WebGL rendering error:', e);
        }
      };

      window.addEventListener('resize', updatePlacement);
      updatePlacement();
      animationIdRef.current = requestAnimationFrame(loop);

      cleanupFunctionRef.current = () => {
        if (animationIdRef.current) { cancelAnimationFrame(animationIdRef.current); animationIdRef.current = null; }
        window.removeEventListener('resize', updatePlacement);
        try {
          const ext = renderer.gl.getExtension('WEBGL_lose_context');
          if (ext) ext.loseContext();
          const canvas = renderer.gl.canvas;
          if (canvas?.parentNode) canvas.parentNode.removeChild(canvas);
        } catch (e) { console.warn('Cleanup error:', e); }
        rendererRef.current = uniformsRef.current = meshRef.current = null;
      };
    };

    initializeWebGL();
    return () => { cleanupFunctionRef.current?.(); cleanupFunctionRef.current = null; };
  }, [isVisible, raysOrigin, raysColor, raysSpeed, lightSpread, rayLength, pulsating, fadeDistance, saturation, followMouse, mouseInfluence, noiseAmount, distortion]);

  // Hot-update uniforms without re-initialising WebGL
  useEffect(() => {
    if (!uniformsRef.current || !containerRef.current || !rendererRef.current) return;
    const u = uniformsRef.current;
    u.raysColor.value      = hexToRgb(raysColor);
    u.raysSpeed.value      = raysSpeed;
    u.lightSpread.value    = lightSpread;
    u.rayLength.value      = rayLength;
    u.pulsating.value      = pulsating ? 1.0 : 0.0;
    u.fadeDistance.value   = fadeDistance;
    u.saturation.value     = saturation;
    u.mouseInfluence.value = mouseInfluence;
    u.noiseAmount.value    = noiseAmount;
    u.distortion.value     = distortion;
    const { clientWidth: wCSS, clientHeight: hCSS } = containerRef.current;
    const dpr = rendererRef.current.dpr;
    const { anchor, dir } = getAnchorAndDir(raysOrigin, wCSS * dpr, hCSS * dpr);
    u.rayPos.value = anchor;
    u.rayDir.value = dir;
  }, [raysColor, raysSpeed, lightSpread, raysOrigin, rayLength, pulsating, fadeDistance, saturation, mouseInfluence, noiseAmount, distortion]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !rendererRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [followMouse]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 ${className}`.trim()}
    />
  );
};

export default LightRays;