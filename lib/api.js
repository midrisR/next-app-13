async function getCategories() {
  const data = await fetch(`http://localhost:5000/api/categorie`);
  const categories = await data.json();
  return categories;
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
export { getCategories, getBrands, getProductById };
