<template>
  <LayoutHeader :links="links">
    <template #logo>
      <p class="py-2 px-3">Logo</p>
    </template>
  </LayoutHeader>
  <BaseRichtext decoration :richtext="description" />
</template>

<script setup lang="ts">
const links = ref<Link[]>([
  { name: "Projects", url: "/projects" },
  { name: "Appearances", url: "/appearances" },
  { name: "Blog", url: "/blog" },
]);

const description = ref(
  '<p>I’m Alba, dawntraoz, a FullStack Engineer at <a href="https://www.storyblok.com/" target="_self"><span class="text-fantasy-green">Storyblok</span></a>. Content creator awarded as <span class="text-fantasy-blue">GDE</span> &amp; <span class="text-fantasy-blue">MVP</span> in Web Tech, <span class="text-fantasy-blue">Nuxt</span> &amp; <span class="text-fantasy-blue">WTM</span> ambassador.</p>'
);
</script>
