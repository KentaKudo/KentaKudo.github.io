<template>
  <figure>
    <img :src="require(`~/assets/img/${src}`)" :alt="alt" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    src: String,
    alt: String,
    caption: String,
  },
};
</script>

<style scoped>
figure {
  margin: 1rem 0;
}
</style>
