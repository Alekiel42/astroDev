<template>
  <section
    class="text-white p-20"
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

    <base-card title="Great Pictures" mode="padding">
      <picOfDay @add-picture-liked="addFavoritePicture" />
      <picLiked
        :favoritePicture="like_array"
        @delete-picture-liked="deleteFavoritePicture"
        @details-picture="addDetailsToModal"
      />

      <picDetail
        v-if="detailsPictureIsShow"
        :info="detailsPicture"
        @close-modal="closeModal"
      />
    </base-card>
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
    },
    moveToRight() {
      this.positionSpaceShip < 70 ? this.positionSpaceShip++ : null;
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

