<template>
  <base-card title="Travel in space" :information="messageAccordingToScreen">
    <div class="absolute left-40 z-10">
      <ficon icon="space-shuttle" class="transform" />
    </div>

    <div class="overflow-hidden">
      <div class="flex mb-32 relative" :style="{ left: positionPlanet + 'px' }">
        <!-- TODO calcul log pour distance -->
        <div
          class="flex-initial absolute"
          :style="{ 'margin-left': planet.distanceFromSun * 1.5 + 'px' }"
          v-for="(planet, index) in systemSolar"
          :key="index"
        >
          <PlanetItem
            :planet="planet"
            :isSelected="planet.selected"
            @change-object-selected="setNewObjectSelected"
          />
        </div>
      </div>
    </div>

    <PlanetItemInformations :infoPlanetSelected="showInformation" />
  </base-card>
</template>

<script>
import PlanetItem from "./PlanetItem.vue";
import PlanetItemInformations from "./PlanetItemInformations.vue";

export default {
  components: {
    PlanetItem,
    PlanetItemInformations,
  },
  computed: {
    positionPlanet() {
      const leftValue = this.positionSpaceShip * -100;
      return leftValue;
    },
    messageAccordingToScreen() {
      return this.windowWidth > 700
        ? "Press left or right keyboard to travel in space"
        : "Travel in space with your finger";
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
  },
  props: {
    positionSpaceShip: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      showInformation: {},
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
