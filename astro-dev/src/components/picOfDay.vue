<template>
  <div class="mb-5">
    <div
      class="text-xl p-4 mb-4 bg-indigo-700 rounded-md w-40"
      v-on:click="callNasa"
    >
      New picture
    </div>
    <div class="flex">
      <div
        v-for="(pic, index) in api_pictures"
        :key="index"
        class="flex-1 m-1"
        @click="addPictureLiked(pic)"
      >
        <img
          class="h-32 w-32 object-cover rounded-2xl"
          v-bind:src="pic.hdurl"
          alt=""
        />
        <div>{{ pic.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["add-picture-liked"],
  data() {
    return {
      apiNasa:
        "https://api.nasa.gov/planetary/apod?api_key=2lhTosYQUGICDd7YYD0NzUapOxUUwFQK1xKbwqN9",
      api_pictures: [],
    };
  },
  methods: {
    addPictureLiked(pic) {
      this.$emit("add-picture-liked", pic);
    },

    randomNumber(min, max) {
      return Math.trunc(Math.random() * (max - min) + min);
    },

    randomDate() {
      // todo to improve day
      // first picture 1995-06-16
      const year = this.randomNumber(1995, new Date().getFullYear() + 1);
      const month = this.randomNumber(1, 13);
      const day = this.randomNumber(1, 27);
      return year + "-" + month + "-" + day;
    },

    async callNasa() {
      this.api_pictures = [];
      for (let i = 0; i < 6; i++) {
        const randomDate = this.randomDate();
        await axios
          .get(this.apiNasa + "&date=" + randomDate)
          .then((response) => {
            this.api_pictures.push(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },

  async mounted() {
    await this.callNasa();
    console.log(this.api_pictures);
  },
};
</script>
