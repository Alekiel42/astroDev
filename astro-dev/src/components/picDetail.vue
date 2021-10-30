<template>
  <div class="absolute top-0 left-0 z-10">
    <div
      class="
        bg-gray-900 bg-opacity-25
        backdrop-filter backdrop-blur-md
        p-10
        fixed
        h-screen
      "
    >
      <button
        class="absolute p-2 m-6 rounded-sm bg-indigo-600 text-gray-200 right-10"
        @click="closeModal"
      >
        Close
      </button>
      <div class="bg-gray-800 p-10 rounded-lg">
        <!-- todo alt -->

        <div class="flex">
          <img
            class="object-cover rounded-2xl w-1/4 mr-6"
            v-bind:src="info.hdurl"
            alt=""
          />
          <p class="mt-4 mr-24 ml-10 text-md">{{ info.explanation }}</p>
        </div>
      </div>
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
