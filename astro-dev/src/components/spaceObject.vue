<template>
  <div
    class="rounded-full border-solid border-4 border-white m-2"
    :class="isSelected ? 'border-opacity-100' : 'border-opacity-0'"
    @click="selectObject"
  >
    <div
      class="w-14 h-14 m-2 rounded-full"
      v-bind:style="{ backgroundColor: object.color }"
    ></div>
  </div>
  <p>{{ object.name }}</p>
</template>

<script>
export default {
  emits: ["change-object-selected"],
  props: {
    object: {
      type: Object,
      default: () => {},
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectObject() {
      this.$emit("change-object-selected", this.object.name);
    },
  },
};
</script>