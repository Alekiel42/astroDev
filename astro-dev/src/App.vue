<template>
  <section class="text-white" id="app">
    <div>
      <h1 class="uppercase text-4xl font-bold mb-2">Astro Dev</h1>
      <p class="italic mb-4">
        when I was young I wanted to be an astrophysicist
      </p>
    </div>

    <picOfDay @add-picture-liked="addFavoritePicture" />

    <div class="flex">
      <picLiked
        :favoritePicture="like_array"
        @delete-picture-liked="deleteFavoritePicture"
      />
      <planetLiked />
    </div>
  </section>
</template>

<script>
import picOfDay from "./components/picOfDay.vue";
import picLiked from "./components/picLiked.vue";
import planetLiked from "./components/planetLiked.vue";

export default {
  name: "App",
  components: {
    picOfDay,
    picLiked,
    planetLiked,
  },
  data() {
    return {
      like_array: [],
    };
  },
  methods: {
    addFavoritePicture(pic) {
      if (!this.like_array.find((picture) => picture.date === pic.date)) {
        this.like_array.push(pic);
      }
    },
    deleteFavoritePicture(date) {
      const picLikedLeft = this.like_array.filter((pic) => pic.date !== date);
      this.like_array = picLikedLeft;
    },
  },
};
</script>

