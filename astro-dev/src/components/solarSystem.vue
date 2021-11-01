<template>
  <div class="border-2 m-4 p-2 rounded-lg">
    <h2 class="uppercase text-2xl">Travel in space</h2>
    <div class="flex mb-8">
      <div
        class="flex-initial"
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
    <button class="bg-gray-400 p-2 m-2" @click="toggleInformationVisibility">
      {{ informationIsVisible ? "Hide" : "Show" }}
      {{ showInformation.name }} informations
    </button>
    <div v-if="informationIsVisible">
      <p>Diameter : {{ showInformation.diameter }} km</p>
      <p>
        Distance From Sun : {{ showInformation.distanceFromSun }} million km
      </p>
    </div>
  </div>
</template>

<script>
import systemSolarObject from "./spaceObject.vue";

export default {
  components: {
    systemSolarObject,
  },
  computed: {},
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
      Math.log(5900) => 8,7
      */
      const distancePercentageFromSun =
        (Math.log(objectSelected.distanceFromSun) / 9) * 100;
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
