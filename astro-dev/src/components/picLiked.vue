<template>
  <div class="flex-none w-2/3 m-4">
    <h2>You like</h2>
    <!-- key date because a pic of day -->
    <div
      class="bg-gray-800 rounded-md p-3 m-3"
      v-for="like in favoritePicture"
      @click="removePictureLiked(like.date)"
      :key="like.date"
    >
      <div class="flex">
        <img
          class="flex-none h-10 w-10 object-cover rounded-sm mr-4"
          v-bind:src="like.hdurl"
          alt=""
        />
        <div>
          <p>
            {{ like.title }}
            <span class="text-gray-200 italic">{{ like.copyright }}</span>
          </p>
          <p class="text-gray-400 text-xs">{{ like.date }}</p>
          <!-- modal : like.explanation -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["delete-picture-liked"],
  props: {
    favoritePicture: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    removePictureLiked(date) {
      this.$emit("delete-picture-liked", date);
    },
  },
};
</script>
