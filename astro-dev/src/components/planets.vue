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
      :style="{
        backgroundColor: planet.color,
        width: diameterCirclePlanet + 'px',
        height: diameterCirclePlanet + 'px',
      }"
    ></div>
  </div>
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
    return {
      diameterCirclePlanet: 10,
    };
  },
  computed: {},
  methods: {
    selectObject() {
      this.$emit("change-object-selected", this.planet.name);
    },
  },
  mounted() {
    // max diam circle * this planet diameter / largest planet diameter
    this.diameterCirclePlanet = Math.ceil(
      (200 * this.planet.diameter) / 142000
    );
  },
};
</script>