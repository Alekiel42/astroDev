<template>
  <base-button @click="toggleInformationVisibility">
    {{ informationIsVisible ? "Hide" : "Show" }}
    {{ infoPlanetSelected.name }}
    informations
  </base-button>
  <div v-if="informationIsVisible" class="m-4 pb-4">
    <div v-if="infoPlanetSelected.name">
      <p>Diameter : {{ infoPlanetSelected.diameter }} km</p>
      <p>
        Distance From Sun :{{ infoPlanetSelected.distanceFromSun }} million km
      </p>
    </div>
    <div v-else>Please select a planet</div>
  </div>
</template>

<script>
export default {
  props: {
    infoPlanetSelected: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      informationIsVisible: false,
    };
  },
  methods: {
    toggleInformationVisibility() {
      this.informationIsVisible = !this.informationIsVisible;
    },
  },
};
</script>
