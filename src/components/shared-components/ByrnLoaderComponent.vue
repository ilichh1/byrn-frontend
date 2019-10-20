<template>
  <div
    class="loading-container"
    :class="{ 'hidden': !isModalVisible }"
    :style="{ 'display': isModalHidden ? 'none' : 'flex'}"
    ref="modalLoader">
    <div class="loading-backdrop"></div>
        <div class="loading">
            <div class="loading-icon">
                <img src="@/assets/img/reel-loader.gif" alt="Cargando..."/>
                <!-- div v-if="!url && html" v-html="html"></div -->
                <!-- slot></slot -->
            </div>
            <div class="loading-label">Cargando...</div>
        </div>

  </div>
</template>

<style lang="scss">
.loading-container {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    text-align: center;
  
  .loading-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: lightgray;
    opacity: 0.5;
    z-index: 9998;
  }
  .loading {
      z-index: 9999;
      position: fixed;
      display: inline-block;
      background-color: white;
      padding: 20px 50px;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%,-50%);
      -moz-transform: translate(-50%,-50%);
      -webkit-transform: translate(-50%,-50%); 
      transform: translate(-50%,-50%);
      .loading-icon {
            margin-bottom: 8px;
      }
  }
}
.loading-container.hidden {
  opacity: 0;
}
</style>

<script>
import { mapGetters } from 'vuex'
import { getters as mainGetters } from '@/store'
import { setTimeout } from 'timers'

/**
 * @group ComponentesReutilizados
 * @vuese
 * Este componente es el loader con un dibujo de una lupa y el logo
 * de BYRN que se muestra en toda la aplicación cada vez que se
 * hace una petición HTTP.
 */
export default {
  name: 'byrn-loader',
  data: () => ({
    /**
     * @vuese
     * Bandera para saber si el _loader_ es visible o no.
     */
    isModalVisible: false,
    /**
     * @vuese
     * Esta bandera se encarga de cambiar la propiedad `display` de CSS.
     */
    isModalHidden: true
  }),
  mounted () {
    window.addEventListener('transitionend', this.onModalTransitionEnd)
  },
  destroyed () {
    window.removeEventListener('transitionend', this.onModalTransitionEnd)
  },
  computed: {
    /**
     * @vuese
     * Mapeo de los getters del estado para comunicarse
     * con el resto de la aplicación.
     */
    ...mapGetters({
      modalState: mainGetters.isModalHidden
    })
  },
  watch: {
    modalState (oldValue, newValue) {
      newValue ? this.onModalShow() : this.onModalHide()
    }
  },
  methods: {
    /**
     * @vuese
     * Se dispara cuando el loader se debe de esconder.
     */
    onModalHide () {
      this.isModalVisible = false
      window.document.body.classList.remove('no-overflow')
    },
    /**
     * @vuese
     * Este método es usado para mostrar el modal.
     */
    onModalShow () {
      this.isModalHidden = false
      this.isModalVisible = true
      window.document.body.classList.add('no-overflow')
    },
    /**
     * @vuese
     * Se dispara al final de la transición para quitar
     * las clases que afectan el scroll del sitio.
     */
    onModalTransitionEnd (event) {
      const { target } = event
      if (target !== this.$refs.modalLoader || this.isModalVisible) { return }
      this.isModalHidden = true
    }
  }
}
</script>
