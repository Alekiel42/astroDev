<template>
  <div class="flex">
    <div
      class="flex-initial"
      v-for="(spaceObject, index) in systemSolar"
      :key="index"
    >
      <div
        class="w-20 h-20 m-2 rounded-full"
        v-bind:style="{ backgroundColor: spaceObject.color }"
      ></div>
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
          color: "ffdb4d",
        },
        {
          name: "Mercury",
          color: "b08d02",
        },
        {
          name: "Venus",
          color: "db8b00",
        },
        {
          name: "Earth",
          color: "338ca2",
        },
        {
          name: "Mars",
          color: "990800",
        },
        {
          name: "Jupiter",
          color: "ffe3a3",
        },
        {
          name: "Saturne",
          color: "d9b3ff",
        },
        {
          name: "Uranus",
          color: "b3f7ff",
        },
        {
          name: "Neptune",
          color: "04029e",
        },
        {
          name: "Pluto",
          color: "403301",
        },
      ],
    };
  },
  methods: {},
};
</script>
