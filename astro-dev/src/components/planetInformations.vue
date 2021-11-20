<template>
  <base-button @click="toggleInformationVisibility">
    {{ informationIsVisible ? "Hide" : "Show" }}
    {{ infoPlanetSelected.name }}
    informations
  </base-button>
  <div v-if="informationIsVisible && showInformation !== ''" class="m-4 pb-4">
    <p>Diameter : {{ infoPlanetSelected.diameter }} km</p>
    <p>
      Distance From Sun :{{ infoPlanetSelected.distanceFromSun }} million km
    </p>
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
