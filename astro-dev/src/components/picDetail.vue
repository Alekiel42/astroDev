<template>
  <div class="absolute top-10 left-10 z-10">
    <div class="bg-gray-900 p-10 w-5/6 max-w-md">
      <!-- todo alt -->
      <img class="object-cover rounded-2xl" v-bind:src="info.hdurl" alt="" />
      <p class="mt-4 text-xs">{{ info.explanation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
