import Create from "./components/create";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getBrands } from "@/lib/api";

export default async function Categorie() {
  const { accessToken } = await getServerSession(authOptions);
  const brands = await getBrands();
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <div className="mt-4 w-5/6 mx-auto">
        <Create accessToken={accessToken} />
        <Table data={brands} accessToken={accessToken} />
      </div>
    </div>
  );
}
