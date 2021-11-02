<template>
  <!-- margine right ici pour distance -->
  <!-- :style="{ 'margin-left': planet.distanceFromSun + 'px' }" -->
  <div
    class="rounded-full border-solid border-4 border-white"
    :class="isSelected ? 'border-opacity-100' : 'border-opacity-0'"
    @click="selectObject"
  >
    <div
      class="w-14 h-14 m-2 rounded-full"
      v-bind:style="{ backgroundColor: planet.color }"
    ></div>
  </div>
  <p>{{ planet.name }}</p>
</template>

<script>
export default {
  emits: ["change-object-selected"],
  props: {
    planet: {
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
      this.$emit("change-object-selected", this.planet.name);
    },
  },
};
</script>