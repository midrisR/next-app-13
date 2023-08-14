export default async function getProducts(
  page = 1,
  perPage,
  params = "",
  brands = ""
) {
  const data = await fetch(
    `http://localhost:5000/api/product?categories=${params}&brands=${brands}&page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return { products: res.products, total: res.products.totalProducts };
}
