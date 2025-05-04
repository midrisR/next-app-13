async function getCategories() {
  const data = await fetch(`http://localhost:5000/api/categorie`);
  const categories = await data.json();
  return categories;
}
async function getProductsByCategorie(id, page = 1, perPage, brands="") {
  const data = await fetch(
    `http://localhost:5000/api/product/categorie/${id}?brands=${brands}&page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return res.products;
}

async function getBrands() {
  const data = await fetch(`http://localhost:5000/api/brand`);
  const brands = await data.json();
  return brands;
}

async function getProductById(id) {
  const res = await fetch(`http://localhost:5000/api/product/${id}`);
  const product = await res.json();
  return product;
}

async function getClient() {
  const data = await fetch(`http://localhost:5000/api/client`);
  const clients = await data.json();
  return clients;
}

async function getVendor() {
  const data = await fetch(`http://localhost:5000/api/vendor`);
  const vendors = await data.json();
  return vendors;
}

async function getOffers() {
  const data = await fetch(`http://localhost:5000/api/offers`);
  const offers = await data.json();
  return offers;
}

export {
  getCategories,
  getBrands,
  getProductById,
  getClient,
  getVendor,
  getOffers,
  getProductsByCategorie,
};
