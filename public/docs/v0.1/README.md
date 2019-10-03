# BYRN Web App
------
Esta es la documentación para la aplicación web de BYRN.

## Explicación de la estructura del proyecto

```
* src (ráiz del código)
  * assets (recursos como estilos e imágenes)
    * ...
  * components (todos los componentes de VueJS que forman este proyecto)
    * ...
  * store-modules (la lógica del estado para la aplicación)
    * ...
  * utils (funciónes para pequeñas carácteristicas de la aplicación)
    * ...
  * views (los componentes que forman la navegación de la aplicación)
    * ...
* endpoints.js (recopilación de todas las rutas disponibles en la API)
* main.js (la configuración inicial provista por VueJS)
* router.js (el archivo de configuración para `vue-router`)
* store.js (la configuración de los módulos para `vuex`)
```

--------
## Información adicional
### BRYN (by CST)
### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Generate documentation
```
vuese gen --outDir="docs/v0.1"
```

### Serve documentation
```
vuese serve --outDir="docs/v0.1"
```

## Árbol completo de archivos del proyecto
```
├── App.vue
├── README.md
├── assets
│   └── img
│       └── vue-logo.png
├── components
│   ├── FooterComponent.vue
│   ├── HeaderComponent.vue
│   ├── estates-crud
│   │   ├── ContainerComponent.vue
│   │   ├── EstatesCreateComponent.vue
│   │   ├── EstatesEditComponent.vue
│   │   └── EstatesListingComponent.vue
│   ├── index.js
│   └── shared-components
│       ├── ByrnLoaderComponent.vue
│       ├── ByrnSwitchComponent.vue
│       ├── EstateFormComponent.vue
│       ├── FiltersComponent.vue
│       ├── ImageCarousel.vue
│       ├── ImageChooserComponent.vue
│       ├── PropertyListingComponent.vue
│       ├── TableComponent.vue
│       └── index.js
├── endpoints.js
├── main.js
├── router.js
├── store-modules
│   ├── auth
│   │   ├── index.js
│   │   └── types.js
│   ├── estates
│   │   ├── index.js
│   │   └── types.js
│   └── users
│       ├── index.js
│       └── types.js
├── store.js
├── utils
│   ├── estateMapFunction.js
│   ├── index.js
│   └── objectToQueryParam.js
└── views
    ├── EditProfileView.vue
    ├── FavoritesView.vue
    ├── HomeView.vue
    ├── LoginView.vue
    ├── RegisterView.vue
    ├── StateDetails.vue
    ├── StatesListingView.vue
    └── dashboard
        ├── DashboardHomeView.vue
        └── children
            ├── ProfileFormView.vue
            └── UploadEstateFormView.vue
```