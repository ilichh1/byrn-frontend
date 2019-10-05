# byrn-loader

Este componente es el loader con un dibujo de una lupa y el logo de BYRN que se muestra en toda la aplicación cada vez que se hace una petición HTTP.

## Methods

<!-- @vuese:byrn-loader:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|onModalHide|Se dispara cuando el loader se debe de esconder.|-|
|onModalShow|Este método es usado para mostrar el modal.|-|
|onModalTransitionEnd|Se dispara al final de la transición para quitar las clases que afectan el scroll del sitio.|-|

<!-- @vuese:byrn-loader:methods:end -->


## Data

<!-- @vuese:byrn-loader:data:start -->
|Name|Type|Description|Default|
|---|---|---|---|
|isModalVisible|`Boolean`|Bandera para saber si el _loader_ es visible o no.|false|
|isModalHidden|`Boolean`|Esta bandera se encarga de cambiar la propiedad `display` de CSS.|true|

<!-- @vuese:byrn-loader:data:end -->


