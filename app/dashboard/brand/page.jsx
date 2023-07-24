import DashboardLayout from "@/components/dashboard";
import Create from "./components/create";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getBrands } from "@/lib/api";

export default async function Categorie() {
  const { accessToken } = await getServerSession(authOptions);
  const brands = await getBrands();
  return (
    <DashboardLayout>
      <div className="flex gap-3 justify-center mt-12 overflow-x-auto rounded-lg border border-gray-200">
        <Table data={brands} accessToken={accessToken} />
        <Create accessToken={accessToken} />
      </div>
    </DashboardLayout>
  );
}
