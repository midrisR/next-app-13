export async function getProducts(
  page = 1,
  perPage,
  categories = "",
  brands = ""
) {
  const data = await fetch(
    `http://localhost:5000/api/product?categories=${categories}&brands=${brands}&page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return { products: res.products, total: res.products.totalProducts };
}


export async function getProductsById(id) {
  const data = await fetch(`http://localhost:5000/api/product/${id}`);
  const product = await data.json();
  return { product: product };
}
