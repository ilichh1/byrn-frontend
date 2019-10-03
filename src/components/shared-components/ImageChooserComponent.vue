<template>
  <div class="image-chooser container p-sm-0">
    <label>Seleccione al menos una imagen destacada</label>
    <div class="image-container row">
      <article
        class="col-12 pt-3 col-md-6 col-lg-4 image"
        v-for="(img, idx) in allImages"
        :key="idx">
        <span class="featured-icon" @click="onFeaturedImage(img)" v-html="isFeatured(img, featuredImage)"></span>
        <span class="remove-icon" @click="onDeletedImage(img)">&#10005;</span>
        <img
          class="w-100"
          :src="img.url"
          alt="Imagen de la propiedad BYRN">
      </article>
    </div>
    <div class="image-controls row mt-2">
      <div class="col-12">
        <label class="btn btn-primary c-pointer w-100" for="byrn-add-image">
          Añadir +
        </label>
        <input
          @change="onAddedFile"
          id="byrn-add-image"
          class="d-none"
          type="file">
      </div>
    </div>
  </div>
</template>

<script>
const loadSrcFromImage = (file) => new Promise((resolve, reject) => {
  var reader = new FileReader()

  reader.onload = ({ target }) => {
    resolve(target.result)
  }

  try {
    reader.readAsDataURL(file)
  } catch (e) {
    reject(new ErrorEvent(e))
  }
})

/**
 * @group ComponentesReutilizados
 * @vuese
 * Este componente es usado en el formulario de creación de propiedades,
 * aunque esta planeado para su futuro uso en otros componentes.
 */
export default {
  name: 'image-chooser-component',
  data: () => ({
    /**
     * @vuese
     * Imagenes disponibles desde la API
     */
    uploadedImages: [],
    /**
     * @vuese
     * Imágenes que exiten en la API pero deberán ser eliminadas.
     */
    deletedImages: []
  }),
  methods: {
    /**
     * @vuese
     * Este método se dispara cada que una imagen es
     * añadida al componente.
     * @arg El DOMEvent disparado por el evento `change`.
     */
    onAddedFile ({ target }) {
      const { files } = target

      if (files && files.length) {
        loadSrcFromImage(files[0])
          .then(src => {
            const addedImage = {
              name: files[0].name,
              url: src,
              isUploadedImage: true,
              featured: false,
              rawObject: files[0]
            }
            this.uploadedImages.push(addedImage)
          })
      }
    },
    /**
     * @vuese
     * Este evento se dispara cada vez que el usuario marca una imagen
     * como "destacada".
     * @arg arg El objeto _imagen_ destacado. Este objeto viene desde el arreglo
     * de imagenes dentro del API o el arreglo de las nuevas imagenes agregadas.
     */
    onFeaturedImage (img) {
      const { isUploadedImage } = img
      if (!isUploadedImage) {
        for(let i = 0; i < this.uploadedImages.length; i++) {
          this.$set(this.uploadedImages, i, {
            ...this.uploadedImages[i],
            featured: false
          });
        }
        this.featuredImage = img.id; // TODO: CHANGE THIS TO EVENT EMITS ONCE THE PARENT PASSES THE PROPS
        return;
      }
      for(let i = 0; i < this.uploadedImages.length; i++) {
        this.$set(this.uploadedImages, i, {
          ...this.uploadedImages[i],
          featured: this.uploadedImages[i] === img
        });
      }
      this.featuredImage = null;
    },
    onDeletedImage (img) {
      const { isUploadedImage } = img
      if (!isUploadedImage) {
        this.deletedImages.push(img.id)
      }
    }
  },
  computed: {
    isFeatured: () => (img, featuredImage) => {
      if (img.id) {
        return featuredImage === img.id ? `&#9733;` : `&#9734;`
      }
      return img.featured ? `&#9733;` : `&#9734;`
    },
    allImages () {
      return [
        ...this.uploadedImages,
        ...this.images.filter(({ id }) => !this.deletedImages.includes(id))
      ]
    }
  },
  props: {
    images: {
      type: Array,
      default: () => ([
        {
          'id': 4,
          'url': 'https://storage.googleapis.com/byrn-bucket/estate01/HdGeAxYagD7IqMZHJh02nLrDTVgDHbE7PGVS2DT2.jpeg',
          'estate_id': 10,
          'created_at': '2019-08-09 21:46:32',
          'updated_at': '2019-08-09 21:46:32'
        },
        {
          'id': 6,
          'url': 'https://storage.googleapis.com/byrn-bucket/estate01/cFiGrjxu7xWnkYPeJF3XkY73wlgLozebS0sk6edg.jpeg',
          'estate_id': 10,
          'created_at': '2019-08-09 21:46:33',
          'updated_at': '2019-08-09 21:46:33'
        }
      ]),
      required: false // turn to true once this component is finished
    },
    featuredImage: {
      type: Number,
      default: () => 4,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.image-chooser {
  padding-left: 0;
  padding-right: 0;

  .image-container {
    .image {
      position: relative;

      .featured-icon, .remove-icon {
        position: absolute;
        cursor: pointer;
      }

      .featured-icon {
        left: 22px;
        top: 22px;
        font-size: 1.4em;
        color: gold;
        text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.75);
      }

      .remove-icon {
        display: inline-block;
        right: 22px;
        top: 22px;
        padding: 4px 8px;
        border-radius: 50%;
        text-align: center;
        color: white;
        background-color: tomato;
      }
    }
  }
}
</style>
