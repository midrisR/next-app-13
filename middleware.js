import { withAuth } from "next-auth/middleware";
export default withAuth({
  secret: process.env.AUTH_SECRET,
});
export const config = {
  matcher: ["/profile", "/example", "/dashboard/:path*"],
};
