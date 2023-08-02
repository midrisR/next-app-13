import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Table from "./components/table";
import Create from "./components/create";
import { getOffers, getVendor } from "@/lib/api";

export default async function Offers() {
  const { accessToken } = await getServerSession(authOptions);
  const [offers, vendors] = await Promise.all([getOffers(), getVendor()]);

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <div className="mt-4 w-5/6 mx-auto">
        <Create accessToken={accessToken} vendors={vendors} />
        <Table accessToken={accessToken} data={offers} vendors={vendors} />
      </div>
    </div>
  );
}
