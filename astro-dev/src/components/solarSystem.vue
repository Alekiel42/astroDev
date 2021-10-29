<template>
  <div class="flex mb-8">
    <div
      class="flex-initial"
      v-for="(spaceObject, index) in systemSolar"
      :key="index"
    >
      <!-- todo component planet-->
      <div>
        <div
          class="w-14 h-14 m-6 rounded-full"
          v-bind:style="{ backgroundColor: spaceObject.color }"
        ></div>
      </div>
      <p>{{ spaceObject.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemSolar: [
        {
          name: "Sun",
          color: "#ffdb4d",
        },
        {
          name: "Mercury",
          color: "#b08d02",
        },
        {
          name: "Venus",
          color: "#db8b00",
        },
        {
          name: "Earth",
          color: "#338ca2",
        },
        {
          name: "Mars",
          color: "#990800",
        },
        {
          name: "Jupiter",
          color: "#ffe3a3",
        },
        {
          name: "Saturne",
          color: "#d9b3ff",
        },
        {
          name: "Uranus",
          color: "#b3f7ff",
        },
        {
          name: "Neptune",
          color: "#04029e",
        },
        {
          name: "Pluto",
          color: "#403301",
        },
      ],
    };
  },
  methods: {
    selectSpaceObject(name) {},
  },
};
</script>
