export const estateMapFunction = (estate) => ({
  id: estate.id,
  type: estate.type === 1 ? 'Casa' : 'Terreno',
  image: estate.images[0] ? estate.images[0].url : 'images/img_1.jpg',
  name: estate.name,
  address: estate.address,
  price: estate.seller_price,
  area: estate.surface_area,
  visit_count: Math.floor(Math.random() * 100)
})
