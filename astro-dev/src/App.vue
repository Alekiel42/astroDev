<template>
  <section
    class="text-white p-20"
    id="app"
    v-bind:style="{ backgroundColor: this.backgroundRGB }"
    @keydown.left="moveToLeft"
    @keydown.right="moveToRight"
    tabindex="0"
  >
    <headerAstro />

    <solarSystem
      @change-color-background="changeColorBackground"
      :positionSpaceShip="positionSpaceShip"
    />

    <div class="border-2 m-4 p-2 rounded-lg">
      <picOfDay @add-picture-liked="addFavoritePicture" />
      <picLiked
        :favoritePicture="like_array"
        @delete-picture-liked="deleteFavoritePicture"
        @details-picture="addDetailsToModal"
      />
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
import picDetail from "./components/picDetail.vue";
import solarSystem from "./components/solarSystem.vue";
import headerAstro from "./components/header.vue";

export default {
  name: "App",
  components: {
    picOfDay,
    picLiked,
    picDetail,
    solarSystem,
    headerAstro,
  },
  data() {
    return {
      positionSpaceShip: 0,
      like_array: [],
      detailsPictureIsShow: false,
      detailsPicture: null,
      backgroundRGB: "rgb(100, 100, 100)",
    };
  },
  methods: {
    moveToLeft() {
      this.positionSpaceShip > 0 ? this.positionSpaceShip-- : null;
      console.log(this.positionSpaceShip);
    },
    moveToRight() {
      this.positionSpaceShip < 7 ? this.positionSpaceShip++ : null;
      console.log(this.positionSpaceShip);
    },
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

