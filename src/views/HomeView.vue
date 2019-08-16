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
                <h1  data-aos="fade-up" class="animated  zoomIn fast ">Venta/Renta de Propiedades</h1>
                <p   data-aos="fade-up" class="animated  zoomIn slow " data-aos-delay="100">Bienes y raíces Nuño</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="

   ;">
      <img src="images/vectores.svg" class="animated  fadeInUpBig slow  " style="position: absolute;
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
                <p>&ldquo;Empresa dedicada a la venta y renta de propiedades, siempre en busca de nuevas adquisiciones para brindar mejores oportunidades de forma accesible al mejor precio.&rdquo;</p>
              </blockquote>

              <div class="col-12 col-lg-4 pt-5 ">
                <label href="" class="hvr-icon-pulse-shrink">
  <font-awesome-icon icon="chart-bar" class="hvr-icon"   style="font-size: 150px" />
                </label>
           

                <h1 class="h3 mb-1 text-black pt-5  " >Misión</h1>
            <blockquote class="hvr-grow">
                <p>&ldquo;Brindar un servicio integral, de  calidad y de confianza como resultado de una preparación  y actualización continua, priorizando un asesoramiento honesto de acuerdo a las necesidades de cada cliente.&rdquo;</p>
              </blockquote>
              </div>

               <div class="col-12 col-lg-4 pt-5">
                 <label href="" class="hvr-icon-spin">
                  <font-awesome-icon icon="cogs" class="hvr-icon" style="font-size: 150px" />
                 </label>
                  <h1 class="h3 mb-1 text-black pt-3">Visión</h1>
            <blockquote class="hvr-grow">
                <p>&ldquo;Ser una empresa que se destaque por la satisfacción de sus clientes, caracterizándonos por un trato amable y profesional, proporcionando siempre productos de la mas alta calidad.&rdquo;</p>
              </blockquote>
              </div>

               <div class="col-12 col-lg-4 pt-5">
                  <label href="" class="hvr-icon-pulse-shrink">
                   <font-awesome-icon icon="code-branch" class="hvr-icon " style="font-size: 150px" />
                  </label>
                  <h1 class="h3 mb-1 text-black pt-3">Valores</h1>
            <blockquote class="hvr-grow">
                <p>

                Trabajo en equipo
                <br>
                Conducta ética
                <br>
                Orientación al cliente
                <br>
                Innovación
                <br>
                Transparencia
             

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
<style>

</style>
