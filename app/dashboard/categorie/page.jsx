import DashboardLayout from "@/components/dashboard";
import Create from "./components/create";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

async function getCategorie() {
  const res = await fetch(`http://localhost:5000/api/categorie`);
  const categorie = await res.json();
  return categorie;
}

export default async function Categorie() {
  const { accessToken } = await getServerSession(authOptions);
  const categories = await getCategorie();
  return (
    <DashboardLayout>
      <div className="flex gap-3 mt-12 overflow-x-auto rounded-lg border border-gray-200">
        <Table data={categories} accessToken={accessToken} />
        <Create accessToken={accessToken} />
      </div>
    </DashboardLayout>
  );
}
