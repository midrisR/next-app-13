import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export default async function getProducts(page, perPage) {
  const { accessToken } = await getServerSession(authOptions);

  const data = await fetch(
    `http://localhost:5000/api/product?page=${page}&perPage=${perPage}`,
    {
      headers: {
        Authorization: accessToken,
      },
    },
    { next: { revalidate: 60 } }
  );
  const res = await data.json();
  return { products: res.products, total: res.products.totalProducts };
}
