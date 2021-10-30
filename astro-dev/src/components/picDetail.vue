<template>
  <div class="absolute top-10 left-10 z-10">
    <div class="bg-gray-900 p-10 w-5/6 max-w-md">
      <!-- todo alt -->
      <button
        class="p-1 m-3 rounded-sm bg-indigo-600 text-black"
        @click="closeModal"
      >
        Close
      </button>
      <img class="object-cover rounded-2xl" v-bind:src="info.hdurl" alt="" />
      <p class="mt-4 text-xs">{{ info.explanation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-modal"],
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
