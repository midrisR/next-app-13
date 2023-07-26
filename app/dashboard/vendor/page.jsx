import { getVendor } from "@/lib/api";
import Table from "./components/table";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
export default async function Client() {
  const { accessToken } = await getServerSession(authOptions);
  const vendors = await getVendor();
  return (
    <div>
      <Table accessToken={accessToken} data={vendors} />
    </div>
  );
}
