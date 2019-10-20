const estateTypes = {
  1: 'Terreno rústico',
  2: 'Terreno urbano',
  3: 'Casa habitación'
}

const mapStateType = (type) => estateTypes[type]

export const estateMapFunction = (estate) => ({
  id: estate.id,
  // La validación en la propiedad siguiente se hace porque dependiendo del
  // servico, el backend envia respuestas distintas
  type: estate.estate_type.name || mapStateType(estate.estate_type),
  image: estate.images[0] ? estate.images[0].url : 'images/img_1.jpg',
  name: estate.name,
  address: estate.address,
  price: estate.seller_price,
  area: estate.surface_area,
  description: estate.description,
  visit_count: Math.floor(Math.random() * 100)
})
