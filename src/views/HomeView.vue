<template>
  <div class="site-wrap">

      <div
      class="site-blocks-cover inner-page-cover overlay"
      style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade"
      data-stellar-background-ratio="1"
    >
      <div class="container" >
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-md-12 ">
             <div class="row justify-content-center mb-4 ">
              <div class="col-md-8 text-center ">
                <h1  data-aos="fade-up">Venta/Renta de Propiedades</h1>
                <p   data-aos="fade-up" data-aos-delay="100">Bienes y raíces Nuño</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style=" 
   
   ;"> 
      <img src="images/vectores.svg"  style="position: absolute;
      width: 100%;
      height: auto;
      left: 0px;
      right: 0px;
      bottom: -6px;
      ">
      </div>
    </div>

    <div class="site-section bg-light">
      <div class="container ">

        <div class="row align-items-center justify-content-center text-center">

             <div class="col-md-7 text-center border-primary ">
            <h2 class="font-weight-light text-primary ">¿Quiénes somos?</h2>
             </div>
            <blockquote class="pt-5">
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>

              <div class="col-12 col-lg-4 pt-5">
           <font-awesome-icon icon="chart-bar" style="font-size: 150px" />

                <h1 class="h3 mb-1 text-black pt-5" >Misión</h1>
            <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              </div>

               <div class="col-12 col-lg-4 pt-5">
                   <font-awesome-icon icon="cogs" style="font-size: 150px" />
                  <h1 class="h3 mb-1 text-black pt-5">Visión</h1>
            <blockquote>
                <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
              </blockquote>
              </div>

               <div class="col-12 col-lg-4 pt-5">
                   <font-awesome-icon icon="code-branch" style="font-size: 150px" />
                  <h1 class="h3 mb-1 text-black pt-5">Objetivos</h1>
            <blockquote>
                <p>

                ipsum dolor sit amet
                <br>
                Consectetur adipiscing elit
                <br>
                Integer molestie lorem at massa
                <br>
                Facilisis in pretium nisl aliquet
                <br>
                Nulla volutpat aliquam velit
                <br>
                 Nulla volutpat aliquam velit

            </p>
                </blockquote>
              </div>

        </div>

      </div>
    </div>

    <div class="site-section bg-white">
      <div class="container">

        <div class="row justify-content-center mb-5">
          <div class="col-md-7 text-center border-primary">
            <h2 class="font-weight-light text-primary">Reseñas</h2>
          </div>
        </div>

        <div class="slide-one-item home-slider owl-carousel">
          <div>
            <div class="testimonial">
              <figure class="mb-4">
                <img src="images/person_3.jpg" alt="Image" class="img-fluid mb-3">
                <p>Ezequiel Rodriguez</p>
              </figure>
              <blockquote>
                <p>&ldquo;Increíble sitio, econtre mi propiedad ideal de una manera muy sencilla, lo recomiendo totalmente !&rdquo;</p>
              </blockquote>
            </div>
          </div>
          <div>
            <div class="testimonial">
              <figure class="mb-4">
                <img src="images/person_5.jpg" alt="Image" class="img-fluid mb-3">
                <p>Karla Mora  </p>
              </figure>
              <blockquote>
                <p>&ldquo;La atención que me dieron desde que agende mi cita es sorprendente, gracias a BYRN encontre la propiedad que se ajustaba a mis necesidades.&rdquo;</p>
              </blockquote>
            </div>
          </div>

          <div>
            <div class="testimonial">
              <figure class="mb-4">
                <img src="images/person_4.jpg" alt="Image" class="img-fluid mb-3">
                <p>Abraham Sánchez</p>
              </figure>
              <blockquote>
                <p>&ldquo;Simplemente Sorprendente, encontre el terreno perfecto para mis hectáreas de aguacate &rdquo;</p>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>

<script>
import PropertyListingComponent from '@/components/shared-components/PropertyListingComponent'

const FEATURED_PROPERTIES = [
  {
    id: 13,
    image: 'images/img_1.jpg',
    type: 'Terreno en venta',
    name: 'Terreno 1',
    is_favorite: false,
    visit_count: 18,
    address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
  },
  {
    id: 18,
    image: 'images/img_2.jpg',
    type: 'Terreno en venta',
    name: 'Terreno 2',
    is_favorite: true,
    visit_count: 22,
    address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
  },
  {
    id: 26,
    image: 'images/img_3.jpg',
    type: 'Terreno en venta',
    name: 'Terreno 3',
    is_favorite: false,
    visit_count: 26,
    address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
  },
  {
    id: 33,
    image: 'images/img_4.jpg',
    type: 'Terreno en venta',
    name: 'Terreno 4',
    is_favorite: true,
    visit_count: 29,
    address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
  },
  {
    id: 35,
    image: 'images/img_2.jpg',
    type: 'Terreno en venta',
    name: 'Terreno 5',
    is_favorite: false,
    visit_count: 64,
    address: 'Camino a la barranca 16, Colonia, Zapotlanejo, Jalisco'
  }
]

export default {
  name: 'home-component',
  data () {
    return {
      featuredProperties: FEATURED_PROPERTIES
    }
  },
  methods: {

  },
  components: {
    PropertyListingComponent
  }
}
</script>
