import { getClient } from "@/lib/api";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
export default async function Client() {
  const { accessToken } = await getServerSession(authOptions);
  const client = await getClient();
  return (
    <div>
      <Table accessToken={accessToken} data={client} />
    </div>
  );
}
