<template>
  <base-dialog>
    <base-button class="absolute right-10" @click="closeModal">
      Close
    </base-button>
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
  </base-dialog>
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
