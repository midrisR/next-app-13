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
    <div className="flex gap-5 justify-center mt-12 overflow-x-auto rounded-lg border border-gray-200 bg-white p-8">
      <Table data={categories} accessToken={accessToken} />
      <Create accessToken={accessToken} />
    </div>
  );
}
