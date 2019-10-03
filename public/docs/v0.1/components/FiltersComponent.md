# FiltersComponent

Este componente se encarga de incializar el slider (o carosuel) de imagenes provisto por `OwlCarousel`.

## Events

<!-- @vuese:FiltersComponent:events:start -->
|Event Name|Description|Parameters|
|---|---|---|
|filtersChanged|Este evento se dispara al componente padre para indicar que los controles del filtro fueron alterados.|-|

<!-- @vuese:FiltersComponent:events:end -->


## Methods

<!-- @vuese:FiltersComponent:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|onFilterChanged|Este método se dispara con la función `debounce` de la librería `lodash` para evitar que se disparen los filtros en cada interacción con los controles. Emite un evento al padre.|-|

<!-- @vuese:FiltersComponent:methods:end -->


## Computed

<!-- @vuese:FiltersComponent:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|filters|-|Los filtros finales para el componente padre.|No|

<!-- @vuese:FiltersComponent:computed:end -->


## Data

<!-- @vuese:FiltersComponent:data:start -->
|Name|Type|Description|Default|
|---|---|---|---|
|meter_price_more_than|`Number`|Precio por metros mínimo para filtrar.|100|
|meter_price_less_than|`Number`|Precio por metros máximo para filtrar.|5000|
|surface_area_more_than|`Number`|Área en mts2 del terreno mínima.|100|
|surface_area_less_than|`Number`|Área en mts2 del terreno máxima.|100000|
|estate_type|`Number`|Tipo de de propiedad.|1|
|sell_or_rent|`Number`|Bandera para saber si la propiedad esta en venta o renta.|0|
|orderBy_order|`String`|Ordenamiento ascendente o descendente.|ASC|
|orderBy_attribute|`String`|Columna por la cual se realizará el ordenamiento.|created_at|

<!-- @vuese:FiltersComponent:data:end -->


