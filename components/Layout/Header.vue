<template>
  <header class="flex justify-between items-center">
    <NuxtLink to="/" class="p-2 h-10 md:h-12">
      <slot name="logo" />
    </NuxtLink>
    <nav class="header">
      <NuxtLink
        v-for="{ url, name } in links"
        :to="url"
        class="header__link"
        :key="`link-header-${name}`"
      >
        {{ name }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  links: Link[];
}>();
</script>

<style>
.header {
  @apply flex text-base leading-normal gap-2 px-2;
}
.header__link {
  @apply text-grey px-2 rounded-md;

  &:hover,
  &:focus,
  &.router-link-exact-active {
    @apply text-white bg-white/10;
  }
}
</style>
