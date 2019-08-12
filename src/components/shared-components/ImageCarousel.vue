<template>
  <div ref="carousel" class="byrn-image-carousel owl-carousel owl-theme mb-3">
    <img v-for="(image, idx) of images"
    class="item owl-lazy"
    :key="idx"
    :src="image"
    :data-src="image"
    alt="Imagen de esta propiedad">
  </div>
</template>

<style lang="scss">
.byrn-image-carousel {
  img.item {
    max-height: 300px;
    width: auto;
    margin: auto;
  }
  .owl-nav {
    margin: 0.7rem;
    .owl-prev,
    .owl-next {
      font-size: 18px;
      padding: 8px 12px;
    }
  }
}
</style>

<script>
import _ from 'lodash'

export default {
  name: 'byrn-image-carousel',
  mounted () {
    this.initCarousel()
  },
  methods: {
    initCarousel () {
      if (this.images.length === 0) {
        return
      }
      $(this.$refs['carousel']).owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        lazyLoad: true,
        nav: true,
        dots: false,
        navText: ['<<', '>>'],
        items: 1
      })
    }
  },
  props: {
    images: {
      default: () => ([
        '/images/img_1.jpg',
        '/images/img_2.jpg',
        '/images/img_3.jpg',
        '/images/img_4.jpg',
        '/images/img_2.jpg'
      ]),
      type: Array
    }
  },
  watch: {
    images: _.debounce(function () {
      this.initCarousel()
    }, 100)
  }
}
</script>
