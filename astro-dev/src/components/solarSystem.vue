<template>
  <section class="border-2 mt-6 m-4 p-2 rounded-lg">
    <div class="relative bottom-6 left-4 uppercase text-2xl text-gray-600">
      <h2 class="bg-white rounded-md inline px-2">Travel in space</h2>
      <p class="text-sm text-white">
        Press left or right keyboard to travel in space
      </p>
    </div>
    <div class="absolute left-40">
      <ficon icon="space-shuttle" class="transform" />
    </div>
    <div class="flex mb-8 overflow-hidden">
      <div
        class="flex-initial relative"
        :style="{ left: positionPlanet + 'px' }"
        v-for="(spaceObject, index) in systemSolar"
        :key="index"
      >
        <systemSolarObject
          :object="spaceObject"
          :isSelected="spaceObject.selected"
          @change-object-selected="setNewObjectSelected"
        />
      </div>
    </div>
    <button
      class="bg-indigo-700 p-2 m-2 rounded-md"
      @click="toggleInformationVisibility"
    >
      {{ informationIsVisible ? "Hide" : "Show" }}
      {{ showInformation.name }} informations
    </button>
    <div v-if="informationIsVisible">
      <p>Diameter : {{ showInformation.diameter }} km</p>
      <p>
        Distance From Sun : {{ showInformation.distanceFromSun }} million km
      </p>
    </div>
  </section>
</template>

<script>
import systemSolarObject from "./spaceObject.vue";

export default {
  components: {
    systemSolarObject,
  },
  computed: {
    positionPlanet() {
      const leftValue = this.positionSpaceShip * -100;
      return leftValue;
    },
  },
  methods: {
    setNewObjectSelected(name) {
      // toogle selector
      this.systemSolar.forEach((elem) => {
        name === elem.name ? (elem.selected = true) : (elem.selected = false);
      });

      // change show information
      const objectSelected = this.systemSolar.find(
        (elem) => elem.name === name
      );
      this.showInformation = objectSelected;

      /* color background after selecting space objet. From gray (near sun) to black (near pluto). Use of logarithm because of exponentially increasing distances 
      Math.log(4500) => 8,4
      */
      const distancePercentageFromSun =
        (Math.log(objectSelected.distanceFromSun) / 8.4) * 100;
      const invertDistancePercentageFromSun = 100 - distancePercentageFromSun;
      const distanceConvertedToHexa =
        (255 * invertDistancePercentageFromSun) / 100;
      this.$emit(
        "change-color-background",
        Math.floor(distanceConvertedToHexa)
      );
    },
    toggleInformationVisibility() {
      this.informationIsVisible = !this.informationIsVisible;
    },
  },
  props: {
    positionSpaceShip: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      informationIsVisible: false,
      showInformation: "",
      systemSolar: [
        {
          name: "Mercury",
          color: "#b08d02",
          diameter: 4800,
          distanceFromSun: 58,
          selected: false,
        },
        {
          name: "Venus",
          color: "#db8b00",
          diameter: 1200,
          distanceFromSun: 108,
          selected: false,
        },
        {
          name: "Earth",
          color: "#338ca2",
          diameter: 12800,
          distanceFromSun: 150,
          selected: false,
        },
        {
          name: "Mars",
          color: "#990800",
          diameter: 6400,
          distanceFromSun: 227,
          selected: false,
        },
        {
          name: "Jupiter",
          color: "#ffe3a3",
          diameter: 142000,
          distanceFromSun: 778,
          selected: false,
        },
        {
          name: "Saturne",
          color: "#d9b3ff",
          diameter: 120000,
          distanceFromSun: 1457,
          selected: false,
        },
        {
          name: "Uranus",
          color: "#b3f7ff",
          diameter: 51300,
          distanceFromSun: 2870,
          selected: false,
        },
        {
          name: "Neptune",
          color: "#04029e",
          diameter: 50000,
          distanceFromSun: 4500,
          selected: false,
        },
      ],
    };
  },
};
</script>
