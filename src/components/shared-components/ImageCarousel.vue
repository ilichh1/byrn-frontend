<template>
  <div ref="carousel" class="owl-carousel owl-theme d-flex">
    <img v-for="(image, idx) of images"
    class="item owl-lazy"
    :key="idx"
    :src="image"
    :data-src="image"
    alt="Imagen de esta propiedad">
  </div>
</template>

<style scoped>
img.item {
  height: 270px;
  width: auto;
}
</style>

<script>
import _ from 'lodash'

export default {
  name: 'byrn-image-carousel',
  mounted() {
    this.initCarousel()
  },
  methods: {
    initCarousel() {
      if (this.images.length === 0) {
        return
      }
      $(this.$refs['carousel']).owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoWidth: true,
        lazyLoad:true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false
          }
        }
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
    images: _.debounce(function() {
      this.initCarousel()
    }, 100)
  }
}
</script>