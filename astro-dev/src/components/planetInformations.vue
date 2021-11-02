<template>
  <button
    class="bg-indigo-700 p-2 m-2 rounded-md"
    @click="toggleInformationVisibility"
  >
    {{ informationIsVisible ? "Hide" : "Show" }}
    {{ infoPlanetSelected.name }}
    informations
  </button>
  <div v-if="informationIsVisible && showInformation !== ''">
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
