// Libs
import NextAuth from "next-auth/next";

// Provider
import Auth0Provider from "next-auth/providers/auth0";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  secret: "uu2DXTo8CggeMp2gG9xlX0DYw9yNEFz1Z/9P4p3wRdc=",
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
});
