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
</template>

<script>
import systemSolarObject from "./spaceObject.vue";

export default {
  components: {
    systemSolarObject,
  },
  data() {
    return {
      systemSolar: [
        {
          name: "Sun",
          color: "#ffdb4d",
          selected: false,
        },
        {
          name: "Mercury",
          color: "#b08d02",
          selected: false,
        },
        {
          name: "Venus",
          color: "#db8b00",
          selected: false,
        },
        {
          name: "Earth",
          color: "#338ca2",
          selected: false,
        },
        {
          name: "Mars",
          color: "#990800",
          selected: false,
        },
        {
          name: "Jupiter",
          color: "#ffe3a3",
          selected: false,
        },
        {
          name: "Saturne",
          color: "#d9b3ff",
          selected: false,
        },
        {
          name: "Uranus",
          color: "#b3f7ff",
          selected: false,
        },
        {
          name: "Neptune",
          color: "#04029e",
          selected: false,
        },
        {
          name: "Pluto",
          color: "#403301",
          selected: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    setNewObjectSelected(name) {
      console.log("ok", name);
      // enlever selected a tous
      this.systemSolar.forEach((elem) => {
        name === elem.name ? (elem.selected = true) : (elem.selected = false);
      });
      console.log("hh", this.systemSolar);
      //! pas rerender si true computed
    },
  },
};
</script>
