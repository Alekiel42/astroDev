<template>
  <header class="pb-4">
    <h1 class="uppercase text-4xl font-bold mb-2">{{ title }}</h1>
    <blockquote class="italic mb-4">{{ quote }}</blockquote>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: false,
    },
  },
};
</script>
