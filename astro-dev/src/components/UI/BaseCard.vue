<template>
  <section class="mt-6 m-4 rounded-md bg-gray-900">
    <header class="relative bottom-4 left-6 uppercase text-2xl text-gray-100">
      <h2 class="bg-gray-900 rounded-md inline px-4">{{ title }}</h2>
      <p class="text-sm text-gray-400 px-4">{{ information }}</p>
    </header>
    <main :class="handlePadding">
      <slot></slot>
    </main>
  </section>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
  computed: {
    handlePadding() {
      return this.mode === "padding" ? "p-2" : null;
    },
  },
};
</script>