<template>
  <section
    class="text-white py-20 px-20"
    id="app"
    v-bind:style="{ backgroundColor: this.backgroundRGB }"
  >
    <div>
      <h1 class="uppercase text-4xl font-bold mb-2">Astro Dev</h1>
      <p class="italic mb-4">
        when I was young I wanted to be an astrophysicist
      </p>
    </div>

    <solarSystem @change-color-background="changeColorBackground" />

    <div class="flex">
      <div>
        <picOfDay @add-picture-liked="addFavoritePicture" />
        <picLiked
          :favoritePicture="like_array"
          @delete-picture-liked="deleteFavoritePicture"
          @details-picture="addDetailsToModal"
        />
      </div>
      <planetLiked />
    </div>

    <picDetail
      v-if="detailsPictureIsShow"
      :info="detailsPicture"
      @close-modal="closeModal"
    />
  </section>
</template>

<script>
import picOfDay from "./components/picOfDay.vue";
import picLiked from "./components/picLiked.vue";
import planetLiked from "./components/planetLiked.vue";
import picDetail from "./components/picDetail.vue";
import solarSystem from "./components/solarSystem.vue";

export default {
  name: "App",
  components: {
    picOfDay,
    picLiked,
    planetLiked,
    picDetail,
    solarSystem,
  },
  data() {
    return {
      like_array: [],
      detailsPictureIsShow: false,
      detailsPicture: null,
      backgroundRGB: "rgb(100, 100, 100)",
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
    addDetailsToModal(date) {
      console.log(date);
      const picSelected = this.like_array.find((pic) => pic.date === date);
      this.detailsPicture = picSelected;
      this.detailsPictureIsShow = true;
      //if no date ?
    },
    changeColorBackground(hexa) {
      this.colorBackground = hexa;
      this.backgroundRGB = `rgb(${this.colorBackground}, ${this.colorBackground}, ${this.colorBackground})`;
    },
    closeModal() {
      this.detailsPictureIsShow = false;
    },
  },
};
</script>

