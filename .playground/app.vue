<template>
  <BaseRichtext decoration :richtext="description" />
</template>

<script setup lang="ts">
const description = ref(
  '<p>I’m Alba, dawntraoz, a FullStack Engineer at <a href="https://www.storyblok.com/" target="_self"><span class="text-fantasy-green">Storyblok</span></a>. Content creator awarded as <span class="text-fantasy-blue">GDE</span> &amp; <span class="text-fantasy-blue">MVP</span> in Web Tech, <span class="text-fantasy-blue">Nuxt</span> &amp; <span class="text-fantasy-blue">WTM</span> ambassador.</p>'
);
</script>
