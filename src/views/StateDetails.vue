<template>
<div class="site-wrap">
    <div class="site-blocks-cover inner-page-cover overlay" style="background-image: url(images/summer-grass.jpg);"
      data-aos="fade" data-stellar-background-ratio="0.5">
      <div class="container">
        <div class="row align-items-center justify-content-left text-left">
          <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-left mt-5">
              <div class="col-md-8 text-left">
                <h1>Titulo de Terreno</h1>
                <hr style="background:white">
                  <form action="#" class="p-5 bg-white" >
                        <div class="col-md-12">
                          <label class=" mb-5 text-black">CARRUSEL</label>
                        </div>
                  </form>
                  <br>
              <form action="#" class="p-1 bg-white" style="border-radius:20px" >
                        <div class="col-md-12">
                          <p class=" mb-5 text-black">Descripcion del terreno </p>
                          <label class=" mb-1 text-black"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit
                  aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt
                  consequatur. Amet dolores excepturi earum unde iusto</label>
                        </div>
                  </form>
               </div>
              </div>
            </div>
          </div>
        </div>
         <div class="container">
        <div class="row align-items-left justify-content-left text-left">
          <div class="col-md-10" data-aos="fade-up" data-aos-delay="400">
            <div class="row justify-content-center mt-5">
              <div class="col-md-8 text-center">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-md-7 mb-5" data-aos="fade">
                    </div>
                  </div>
                    <h2 class="mb-1 text-white">Contactar Anunciante</h2>
                    <form action="#" class="p-3 bg-white">
                      <div class="row form-group">
                        <div class="col-md-12">
                          <label class="text-black" for="email">Correo</label>
                          <input type="email" id="email" class="form-control">
                        </div>
                      </div>
                      
                        <div class="row form-group">
                          <div class="col-md-12">
                            <label class="text-black" for="phone">Teléfono</label>
                            <input type="text" id="phone" class="form-control">
                          </div>
                        </div>
                          <div class="row form-group">
                            <div class="col-md-12 ">
                            <label class="text-black" for ="message"> Mensaje </label>
                            <input type="text" id="message" class="form-control"  style="height :200px">
                            </div>
                          </div>
                            <div class="row form-group">
                              <div class="col-md-12">
                                <input type="submit" value="Enviar" class="btn btn-primary py-2 px-4 text-white">
                              </div>
                            </div>
                      </form>
                      
                          
                          <router-link to="/"><img src="/images/calendar.png" width="50px" height="50px"/><h2 class="text-black"> Agenda tu cita </h2></router-link>
                         
                          
                         
                    </div>
                  </div>
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
     name: 'states-listing-component',
     data () {
    return {
      featuredProperties: FEATURED_PROPERTIES
    }
  },
  components: {
    'state-component': PropertyListingComponent
    
}
}
</script>
<style>

.cuadrado{
padding:60px;
width: 50%;
margin:10px;
border-radius: 20px;
background-color: #ffffff;
border: solid 1px white;
color: white;
}

</style>
