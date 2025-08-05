import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import jwt from "jsonwebtoken";

async function refreshAccessToken(token) {
  console.log("refreshAccessToken");
  try {
    const res = await fetch({
      url: "https://api.projectme.my.id/api/auth/refreshtoken",
      method: "post",
      headers: { "x-access-token": token.refreshToken },
    });
    if (!res.ok) {
      throw res;
    }
    const data = await res.json();
    const { exp } = jwt.verify(data.accessToken, process.env.AUTH_SECRET);
    return { ...data, expiresAt: exp };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const results = await fetch("https://api.projectme.my.id/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
        const data = await results.json();
        if (results.ok) {
          return { ...data };
        } else {
          const { message } = data;
          throw new Error(JSON.stringify(message));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        const { exp } = jwt.verify(user.accessToken, process.env.AUTH_SECRET);
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.expiresAt = exp;
        token.role = "admin";
      }
      const expCheck = token.expiresAt < (new Date().getTime() + 1) / 1000;
      if (!expCheck) {
        return token;
      }
      return refreshAccessToken(token);
    },

    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.error = token.error;
      return session;
    },
  },
};
