<script setup lang="ts">
/**
 * Retro-futuristic synthwave/CRT aesthetic
 */

withDefaults(defineProps<{
  title?: string
  tagline?: string
}>(), {
  title: 'title',
  tagline: ''
})
</script>

<template>
  <div class="h-full w-full flex flex-col justify-end relative overflow-hidden" style="background: linear-gradient(180deg, #0a0a0a 0%, #00130C 40%, #00291A 70%, #004227 100%);">
    <!-- Gradient glow at top -->
    <div class="absolute" style="width: 100%; height: 300px; top: 0; left: 0; background: radial-gradient(ellipse 80% 100% at 50% 0%, rgba(0, 192, 115,0.3) 0%, rgba(0, 142, 85,0.15) 40%, transparent 70%);" />

    <!-- Grid floor -->
    <svg class="absolute bottom-0 left-0 right-0" style="height: 280px;" viewBox="0 0 1200 280" preserveAspectRatio="none">
      <defs>
        <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#ff2a6d;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#05d9e8;stop-opacity:0.3" />
        </linearGradient>
      </defs>
      <!-- Horizontal lines with perspective -->
      <line x1="0" y1="20" x2="1200" y2="20" stroke="url(#gridFade)" stroke-width="1" opacity="0.3" />
      <line x1="0" y1="50" x2="1200" y2="50" stroke="url(#gridFade)" stroke-width="1" opacity="0.4" />
      <line x1="0" y1="90" x2="1200" y2="90" stroke="url(#gridFade)" stroke-width="1" opacity="0.5" />
      <line x1="0" y1="140" x2="1200" y2="140" stroke="url(#gridFade)" stroke-width="1.5" opacity="0.6" />
      <line x1="0" y1="200" x2="1200" y2="200" stroke="url(#gridFade)" stroke-width="2" opacity="0.7" />
      <line x1="0" y1="280" x2="1200" y2="280" stroke="url(#gridFade)" stroke-width="2" opacity="0.8" />
      <!-- Vertical lines converging to horizon -->
      <line x1="600" y1="0" x2="600" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.5" />
      <line x1="600" y1="0" x2="0" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.4" />
      <line x1="600" y1="0" x2="1200" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.4" />
      <line x1="600" y1="0" x2="200" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.3" />
      <line x1="600" y1="0" x2="1000" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.3" />
      <line x1="600" y1="0" x2="400" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.35" />
      <line x1="600" y1="0" x2="800" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.35" />
      <line x1="600" y1="0" x2="-200" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.2" />
      <line x1="600" y1="0" x2="1400" y2="280" stroke="url(#gridFade)" stroke-width="1" opacity="0.2" />
    </svg>

    <!-- Scanlines overlay -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px);" />

    <!-- Content -->
    <div class="relative z-10 px-16 pb-20" style="margin-top: auto;">
      <p
        v-if="tagline"
        class="text-xl font-mono uppercase tracking-[0.4em] mb-4"
        style="color: #00DC82; text-shadow: 0 0 20px #00DC82, 0 0 40px #00DC82;"
      >
        {{ tagline }}
      </p>
      <h1
        class="text-[80px] font-black uppercase leading-[0.9] tracking-tight"
        style="color: #fff; text-shadow: 0 0 20px #00DC82, 0 0 40px #00DC82, 0 0 60px #00DC82, 2px 2px 0 #00DC82; display: block; line-clamp: 2; text-overflow: ellipsis;"
      >
        {{ title }}
      </h1>
    </div>

    <!-- Corner chrome accents -->
    <div class="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2" style="border-color: #00DC82; opacity: 0.6;" />
    <div class="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2" style="border-color: #00DC82; opacity: 0.6;" />
  </div>
</template>
