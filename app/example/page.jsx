import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

export default async function Example() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2>JSON Web Token</h2>
      <iframe className="w-full" src="/api/user" />
      <h2>Sesion</h2>
      <p>/api/examples/jwt</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
