<template>
  <header class="flex justify-between items-center bg-black">
    <NuxtLink to="/" class="w-10 h-10 md:w-12 md:h-12">
      <slot name="logo" />
    </NuxtLink>
    <nav class="header">
      <NuxtLink v-for="{ url, name } in links" :to="url" class="header__link">
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
  @apply flex text-base leading-normal;
}
.header__link {
  @apply text-grey py-2 px-3 md:py-3 md:px-6 border-b-2 border-transparent;

  &:hover,
  &:focus,
  &.router-link-exact-active {
    @apply text-white border-fantasy-pink bg-black-light;
  }
}
</style>
