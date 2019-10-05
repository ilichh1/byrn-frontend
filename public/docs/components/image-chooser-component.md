# image-chooser-component

Este componente es usado en el formulario de creación de propiedades, aunque esta planeado para su futuro uso en otros componentes.

## Props

<!-- @vuese:image-chooser-component:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|images|-|`Array`|`false`|[{"id":4,"url":"https://storage.googleapis.com/byrn-bucket/estate01/HdGeAxYagD7IqMZHJh02nLrDTVgDHbE7PGVS2DT2.jpeg","estate_id":10,"created_at":"2019-08-09 21:46:32","updated_at":"2019-08-09 21:46:32"},{"id":6,"url":"https://storage.googleapis.com/byrn-bucket/estate01/cFiGrjxu7xWnkYPeJF3XkY73wlgLozebS0sk6edg.jpeg","estate_id":10,"created_at":"2019-08-09 21:46:33","updated_at":"2019-08-09 21:46:33"}]|
|featuredImage|-|`Number`|`false`|4|

<!-- @vuese:image-chooser-component:props:end -->


## Methods

<!-- @vuese:image-chooser-component:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|onAddedFile|Este método se dispara cada que una imagen es añadida al componente.|El DOMEvent disparado por el evento `change`.|
|onFeaturedImage|Este evento se dispara cada vez que el usuario marca una imagen como "destacada". de imagenes dentro del API o el arreglo de las nuevas imagenes agregadas.|arg El objeto _imagen_ destacado. Este objeto viene desde el arreglo|

<!-- @vuese:image-chooser-component:methods:end -->


## Data

<!-- @vuese:image-chooser-component:data:start -->
|Name|Type|Description|Default|
|---|---|---|---|
|uploadedImages|`Array`|Imagenes disponibles desde la API|-|
|deletedImages|`Array`|Imágenes que exiten en la API pero deberán ser eliminadas.|-|

<!-- @vuese:image-chooser-component:data:end -->


