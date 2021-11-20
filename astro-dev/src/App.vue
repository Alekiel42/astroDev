<template>
  <section
    class="text-white md:p-20 p-1"
    v-bind:style="{ backgroundColor: this.backgroundRGB }"
    @keydown.left="moveToLeft"
    @keydown.right="moveToRight"
    tabindex="0"
  >
    <the-header
      title="Astro Dev"
      quote="When I was young I wanted to be an astrophysicist"
    ></the-header>

    <PlanetSystem
      @change-color-background="changeColorBackground"
      :positionSpaceShip="positionSpaceShip"
      @touchstart="getStartFinger"
      @touchend="getEndFinger"
    />

    <base-card title="Great Pictures" mode="padding">
      <PictureNasaRamdomDay @add-picture-liked="addFavoritePicture" />
      <PictureLiked
        :favoritePicture="like_array"
        @delete-picture-liked="deleteFavoritePicture"
        @details-picture="addDetailsToModal"
      />

      <PictureLikedDetail
        v-if="detailsPictureIsShow"
        :info="detailsPicture"
        @close-modal="closeModal"
      />
    </base-card>
  </section>
</template>

<script>
import PictureNasaRamdomDay from "./components/pictures/PictureNasaRandomDay.vue";
import PictureLiked from "./components/pictures/PictureLiked.vue";
import PictureLikedDetail from "./components/pictures/PictureLikedDetail.vue";
import PlanetSystem from "./components/planets/PlanetSystem.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  name: "App",
  components: {
    PictureNasaRamdomDay,
    PictureLiked,
    PictureLikedDetail,
    PlanetSystem,
    TheHeader,
  },
  data() {
    return {
      startFingerTouch: 0,
      endFingerTouch: 0,
      positionSpaceShip: 0,
      like_array: [],
      detailsPictureIsShow: false,
      detailsPicture: null,
      backgroundRGB: "rgb(100, 100, 100)",
    };
  },
  watch: {
    endFingerTouch() {
      const distance = (this.endFingerTouch - this.startFingerTouch) / 400;
      this.positionSpaceShip -= distance;
    },
  },
  methods: {
    moveToLeft() {
      this.positionSpaceShip > 0 ? this.positionSpaceShip-- : null;
    },
    moveToRight() {
      this.positionSpaceShip < 70 ? this.positionSpaceShip++ : null;
    },
    getStartFinger(e) {
      this.startFingerTouch = e.touches[0].clientX;
    },
    getEndFinger(e) {
      this.endFingerTouch = e.changedTouches[0].clientX;
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

