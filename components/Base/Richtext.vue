<template>
  <Vue3RuntimeTemplate
    :template="richtext"
    :class="decoration && 'comment-decorator'"
  ></Vue3RuntimeTemplate>
</template>

<script setup lang="ts">
import Vue3RuntimeTemplate from "vue3-runtime-template";

defineProps<{
  richtext: string;
  decoration?: boolean;
}>();
</script>
