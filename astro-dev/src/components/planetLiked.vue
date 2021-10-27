<template>
  <div flex="flex-initial w-1/3">
    <h2>Planet you like</h2>
    <p class="text-xs text-gray-600">Add your favorites planets</p>

    <form class="mb-4" @submit.prevent="addPlanet">
      <input
        v-bind:value="input_planet"
        class="rounded-md text-gray-800 h-10 p-4"
        type="text"
        v-on:input="newPlanet"
      />
      <button class="text-xl p-4 mb-4 bg-indigo-700 rounded-md w-40 mt-4">
        Add planet
      </button>
    </form>

    <div class="flex flex-wrap">
      <div
        class="flex-2 m-2 p-4 bg-gray-600 rounded-md"
        v-for="(planet, index) in planets_array"
        :key="index"
      >
        {{ planet }}
      </div>
      <div>{{ name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_planet: "",
      planets_array: [],
    };
  },
  methods: {
    newPlanet(event) {
      this.input_planet = event.target.value;
    },

    addPlanet() {
      if (this.input_planet !== "") {
        this.planets_array.push(this.input_planet);
        this.input_planet = "";
      }
    },
  },
};
</script>
