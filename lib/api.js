// PRODUCT
export async function getProductsByCategorie(
  id,
  page = 1,
  perPage,
  brands = ""
) {
  const data = await fetch(
    `http://localhost:5000/api/product/categorie/${id}?brands=${brands}&page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return res.products;
}

export async function getProductById(id) {
  const res = await fetch(`http://localhost:5000/api/product/${id}`);
  const product = await res.json();
  return product;
}

// CATEGORIE
export async function getCategories() {
  const data = await fetch(`http://localhost:5000/api/categorie`);
  const categories = await data.json();
  return categories;
}
export async function getCategoriesById(id) {
  const data = await fetch(`http://localhost:5000/api/categorie/${id}`);
  const categories = await data.json();
  return categories;
}

export async function updateCategorie({ id, token, formData }) {
  const res = await fetch(`http://localhost:5000/api/product/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: token,
    },
  });
  const result = await res.json();
  return result;
}

export async function getBrands() {
  const data = await fetch(`http://localhost:5000/api/brand`);
  const brands = await data.json();
  return brands;
}

export async function getClient() {
  const data = await fetch(`http://localhost:5000/api/client`);
  const clients = await data.json();
  return clients;
}

export async function getVendor() {
  const data = await fetch(`http://localhost:5000/api/vendor`);
  const vendors = await data.json();
  return vendors;
}

export async function getOffers() {
  const data = await fetch(`http://localhost:5000/api/offers`);
  const offers = await data.json();
  return offers;
}

export async function getBanner() {
  const data = await fetch(`http://localhost:5000/api/image/banner`);
  const images = await data.json();
  return images;
}

export async function deleteProduct(id, token) {
  await fetch(`http://localhost:5000/api/product/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}
export async function deleteCategorie(id, token) {
  await fetch(`http://localhost:5000/api/categorie/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}
