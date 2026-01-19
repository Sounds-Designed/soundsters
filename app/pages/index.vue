<script setup>
useHead({
  link: [{ rel: 'canonical', href: 'https://soundsters.soundsdesigned.com' }],
})

useSeoMeta({
  title: 'Are you a Soundster?',
  ogTitle: 'Are you a Soundster?',
  description: 'Discover your contributions to unlock the soundster role on Sounds Designed Discord server.',
  ogDescription: 'Discover your contributions to unlock the soundster role on Sounds Designed Discord server.',
  // ogImage: 'https://soundsters.soundsdesigned.com/social-card.jpg',
  ogImageAlt: 'Soundsters',
  // twitterImage: 'https://soundsters.soundsdesigned.com/social-card.jpg',
  ogUrl: 'https://soundsters.soundsdesigned.com',
})
</script>

<template>
  <div class="text-green-400 flex flex-col gap-y-[72px] py-10 lg:py-40">
    <HomeHero />

    <HomeContributors />

    <HomeJoin />
  </div>
</template>
