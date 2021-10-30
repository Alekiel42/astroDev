<template>
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
    Show / Hide informations
  </button>
  <div v-if="informationIsVisible">
    <p>{{ informationToShow }}</p>
  </div>
</template>

<script>
import systemSolarObject from "./spaceObject.vue";

export default {
  components: {
    systemSolarObject,
  },
  data() {
    return {
      informationIsVisible: false,
      informationToShow: "",
      systemSolar: [
        {
          name: "Sun",
          color: "#ffdb4d",
          information:
            "The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light, ultraviolet light, and infrared radiation. ",
          selected: false,
        },
        {
          name: "Mercury",
          color: "#b08d02",
          information:
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.",
          selected: false,
        },
        {
          name: "Venus",
          color: "#db8b00",
          information: "",
          selected: false,
        },
        {
          name: "Earth",
          color: "#338ca2",
          information: "",
          selected: false,
        },
        {
          name: "Mars",
          color: "#990800",
          information: "",
          selected: false,
        },
        {
          name: "Jupiter",
          color: "#ffe3a3",
          information: "",
          selected: false,
        },
        {
          name: "Saturne",
          color: "#d9b3ff",
          information: "",
          selected: false,
        },
        {
          name: "Uranus",
          color: "#b3f7ff",
          information: "",
          selected: false,
        },
        {
          name: "Neptune",
          color: "#04029e",
          information: "",
          selected: false,
        },
        {
          name: "Pluto",
          color: "#403301",
          information: "",
          selected: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    setNewObjectSelected(name) {
      this.systemSolar.forEach((elem) => {
        name === elem.name ? (elem.selected = true) : (elem.selected = false);
      });

      const objectSelected = this.systemSolar.find(
        (elem) => elem.name === name
      );
      this.informationToShow = objectSelected.information;
    },
    toggleInformationVisibility() {
      this.informationIsVisible = !this.informationIsVisible;
    },
  },
};
</script>
