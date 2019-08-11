<template>
    <div class="form-search-wrap mb-3" data-aos="fade-up" data-aos-delay="200">
              <form method="post">
                <div class="row align-items-center">
                  <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3 ">
                    <p>
                    <label class=" form-control-rounded text-black" >
                      Precio:
                    </label>
                    </p>
                 <range-slider
                    class="form-control-rounded slider"
                    min="10"
                    max="1000"
                    step="10"
                   v-model="meter_price_more_than">
                  </range-slider>
                   <label class="text-black">
                    Max: $ {{meter_price_more_than}}
                  </label>
                  </div>
                  <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3 ">
                    <p>
                    <label class="text-black">
                      Superficie:
                    </label>
                    </p>
                <range-slider
                    class="slider"
                    min="10"
                    max="1000"
                    step="10"
                   v-model="surface_area_more_than">
                  </range-slider>
                  <label class="text-black" >
                    Max: {{surface_area_more_than}} m2
                  </label>
                   </div>
                  <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                    <div class="select-wrap">
                      <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                      <select class="form-control rounded" v-model="estate_type">
                        <option  value="">Tipo de Propiedad</option>
                        <option value="Terreno">Terreno</option>
                        <option value="Casa">Casa</option>
                   </select>
                    </div>
                  </div>
                   <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                    <div class="select-wrap" >
                      <span class="icon" ><span class="icon-keyboard_arrow_down"></span></span>
                      <select class="form-control rounded" v-model="sell_or_rent" >
                        <option value="">Venta o Renta</option>
                        <option value="Venta">Venta</option>
                        <option value="Renta">Renta</option>
                   </select>
                    </div>
                  </div>
                    <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                 <range-slider
                    class="slider"
                    min="10"
                    max="1000"
                    step="10"
                   v-model="meter_price_less_than">
                  </range-slider>
                   <label class="text-black">
                    Min: $ {{meter_price_less_than}}
                  </label >
                  </div>
                  <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3">
                 <range-slider
                    class="slider"
                    min="10"
                    max="1000"
                    step="10"
                   v-model="surface_area_less_than">
                  </range-slider>
                   <label class="text-black">
                    Min: {{surface_area_less_than}} m2
                  </label>
                  </div>
                   <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3 mt-3">
                    <div class="select-wrap">
                      <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                      <select class="form-control rounded" v-model="orderBy_order">
                        <option value="">Ordenar</option>
                        <option value="Ascendente">Ascendente</option>
                        <option value="Descendente">Descendente</option>
                   </select>
                    </div>
                  </div>
                    <div class="col-lg-12 mb-4 mb-xl-0 col-xl-3 mt-3">
                    <div class="select-wrap">
                      <span class="icon"><span class="icon-keyboard_arrow_down"></span></span>
                      <select class="form-control rounded" v-model="itemsByPage">
                        <option value="">Propiedades por pagina</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                   </select>
                    </div>
                  </div>
                </div>
              </form>
             </div>
</template>
<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
export default {
    
    name: "FilterComponent",
     data(){
    return {
        
        meter_price_more_than:"",
        meter_price_less_than:"",
        surface_area_more_than:"",
        surface_area_less_than:"",
        estate_type:"",
        sell_or_rent:"",
        orderBy_order:"",
        orderBy_attribute:null,
        itemsByPage:""

    } 
    
},
components: {
    RangeSlider
}

}
</script>
