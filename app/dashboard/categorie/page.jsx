import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import DashboardLayout from "@/components/dashboard";
import Create from "./components/create";
import Table from "./components/table";
async function getCategorie(token) {
  const res = await fetch(`http://localhost:5000/api/categorie`, {
    headers: {
      Authorization: token,
    },
  });
  const categorie = await res.json();
  return categorie;
}

export default async function Categorie() {
  const { accessToken } = await getServerSession(authOptions);
  const categories = await getCategorie(accessToken);
  console.log(categories);
  return (
    <DashboardLayout>
      <div className="flex gap-20 justify-center mt-12 overflow-x-auto rounded-lg border border-gray-200">
        <Table data={categories} />
        <Create />
      </div>
    </DashboardLayout>
  );
}
