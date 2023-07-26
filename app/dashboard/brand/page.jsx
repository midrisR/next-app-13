import Create from "./components/create";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getBrands } from "@/lib/api";

export default async function Categorie() {
  const { accessToken } = await getServerSession(authOptions);
  const brands = await getBrands();
  return (
    <>
      <div className="flex gap-5 justify-center mt-12 overflow-x-auto rounded-lg border border-gray-200 bg-white p-8">
        <Table data={brands} accessToken={accessToken} />
        <Create accessToken={accessToken} />
      </div>
    </>
  );
}
