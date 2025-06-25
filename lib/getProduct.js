export async function getProducts({
  page = 1,
  perPage = 10,
  categories = "",
  brands = "",
  search = "",
}) {
  const res = await fetch(
    `http://localhost:5000/apiproduct?categories=${categories}&brands=${brands}&search=${search}&page=${page}&perPage=${perPage}`
  );
  const json = await res.json();
  const { products, currentPage, totalPages, totalProducts } = json;
  return { products, currentPage, totalPages, totalProducts };
}

export async function getProductsById(id) {
  const data = await fetch(`http://localhost:5000/apiproduct/${id}`);
  const product = await data.json();
  return { product: product };
}
