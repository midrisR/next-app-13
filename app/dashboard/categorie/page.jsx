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
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <div className="mt-4 w-5/6 mx-auto">
        <Create accessToken={accessToken} />
        <Table data={categories} accessToken={accessToken} />
      </div>
    </div>
  );
}
