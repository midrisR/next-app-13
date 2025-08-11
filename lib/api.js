export const revalidate = 60;

// Brand
export async function getBrands() {
  const data = await fetch(`https://api.projectme.my.id/brand`);
  const brands = await data.json();
  return brands;
}

export async function getBrandById(id) {
  const data = await fetch(`https://api.projectme.my.id/brand/${id}`);
  const brand = await data.json();
  return brand;
}

export async function createBrand({ form, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/brand", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}

export async function updateBrand({ id, accessToken, form }) {
  const res = await fetch(`https://api.projectme.my.id/brand/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  return result;
}

export async function deleteBrand({ id, accessToken }) {
  await fetch(`https://api.projectme.my.id/brand/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: accessToken,
    },
  });
}

// client
export async function getClient() {
  const data = await fetch(`https://api.projectme.my.id/client`);
  const clients = await data.json();
  return clients;
}
export async function getClientById(id) {
  const data = await fetch(`https://api.projectme.my.id/client/${id}`);
  const clients = await data.json();
  return clients;
}
export async function createClient({ form, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/client", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function updateClient({ id, form, accessToken }) {
  const res = await fetch(`https://api.projectme.my.id/client/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function deleteClient({ id, accessToken }) {
  await fetch(`https://api.projectme.my.id/client/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: accessToken,
    },
  });
}

// vendor
export async function getVendor() {
  const data = await fetch(`https://api.projectme.my.id/vendor`);
  const vendors = await data.json();
  return vendors;
}
export async function getVendorById(id) {
  const data = await fetch(`https://api.projectme.my.id/vendor/${id}`);
  const vendor = await data.json();
  return vendor;
}
export async function createVendor({ form, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/vendor", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function updateVendor({ id, form, accessToken }) {
  const res = await fetch(`https://api.projectme.my.id/vendor/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function deleteVendor({ id, accessToken }) {
  await fetch(`https://api.projectme.my.id/vendor/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: accessToken,
    },
  });
}
export async function getOffers() {
  const data = await fetch(`https://api.projectme.my.id/offers`);
  const offers = await data.json();
  return offers;
}

// Products
export async function getProducts({
  page = 1,
  perPage = 10,
  categories = "",
  brands = "",
  search = "",
}) {
  const res = await fetch(
    `https://api.projectme.my.id/product?categories=${categories}&brands=${brands}&search=${search}&page=${page}&perPage=${perPage}`
  );
  const json = await res.json();
  const { products, currentPage, totalPages, totalProducts } = json;
  return { products, currentPage, totalPages, totalProducts };
}

export async function getProductsById(id) {
  const data = await fetch(`https://api.projectme.my.id/product/${id}`);
  const product = await data.json();
  return { product: product };
}

export async function getProductsByCategorie(
  id,
  page = 1,
  perPage,
  brands = ""
) {
  const data = await fetch(
    `https://api.projectme.my.id/product/categorie/${id}?brands=${brands}&page=${page}&perPage=${perPage}`
  );
  const res = await data.json();
  return res.products;
}

export async function getProductById(id) {
  const res = await fetch(`https://api.projectme.my.id/product/${id}`);
  const product = await res.json();
  return product;
}

export async function createProduct({ formData, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/product", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: accessToken,
    },
  });

  const result = await res.json();
  if (!result.success) {
    throw result; // akan ditangkap di onError
  }
  return result;
}

export async function deleteProduct(id, token) {
  await fetch(`https://api.projectme.my.id/product/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}

// Categorie
export async function getCategories() {
  const data = await fetch(`https://api.projectme.my.id/categorie`);
  const categories = await data.json();
  return categories;
}

export async function getCategoriesById(id) {
  const data = await fetch(`https://api.projectme.my.id/categorie/${id}`);
  const categories = await data.json();
  return categories;
}

export async function updateCategorie({ id, accessToken, formData }) {
  const res = await fetch(`https://api.projectme.my.id/categorie/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  return result;
}

export async function deleteCategorie(id, token) {
  await fetch(`https://api.projectme.my.id/categorie/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}

// Banner
export async function getBanner() {
  const data = await fetch(`https://api.projectme.my.id/banner`);
  const images = await data.json();
  return images;
}

export async function getBannerById(id) {
  const data = await fetch(`https://api.projectme.my.id/banner/${id}`);
  const categories = await data.json();
  return categories;
}

export async function createBanner({ formData, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/banner", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}

export async function deleteBanner(id, token) {
  await fetch(`https://api.projectme.my.id/banner/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
}

export async function updateBanner({ id, accessToken, formData }) {
  const res = await fetch(`https://api.projectme.my.id/banner/${id}`, {
    method: "PUT",
    body: formData,
    headers: {
      Authorization: accessToken,
    },
  });
  console.log(formData);

  const result = await res.json();
  return result;
}

// employes

export async function getEmploye() {
  const data = await fetch(`https://api.projectme.my.id/employe`);
  const employes = await data.json();
  return employes;
}
export async function getEmployeById(id) {
  const data = await fetch(`https://api.projectme.my.id/employe/${id}`);
  const employe = await data.json();
  return employe;
}
export async function createEmploye({ form, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/employe", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function updateEmploye({ id, form, accessToken }) {
  const res = await fetch(`https://api.projectme.my.id/employe/${id}`, {
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}
export async function deleteEmploye({ id, accessToken }) {
  await fetch(`https://api.projectme.my.id/employe/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: accessToken,
    },
  });
}

// message

export async function getQuestion() {
  const data = await fetch(`https://api.projectme.my.id/question`);
  const question = await data.json();
  return question;
}

export async function getQuestionById(id) {
  const data = await fetch(`https://api.projectme.my.id/question/${id}`);
  const question = await data.json();
  return question;
}

export async function createQuestion({ form, accessToken }) {
  const res = await fetch("https://api.projectme.my.id/question", {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
      Authorization: accessToken,
    },
  });
  const result = await res.json();
  if (!result.success) {
    throw result;
  }
  return result;
}

export async function deleteQuestion({ id, accessToken }) {
  await fetch(`https://api.projectme.my.id/question/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: accessToken,
    },
  });
}
