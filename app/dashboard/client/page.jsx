import { getClient } from "@/lib/api";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Create from "./components/create";

export default async function Client() {
  const { accessToken } = await getServerSession(authOptions);
  const client = await getClient();
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <div className="mt-4 w-5/6 mx-auto">
        <Create accessToken={accessToken} />
        <Table accessToken={accessToken} data={client} />
      </div>
    </div>
  );
}
