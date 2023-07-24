export default async function getProducts(page, perPage) {
  const data = await fetch(
    `http://localhost:5000/api/product?page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return { products: res.products, total: res.products.totalProducts };
}
