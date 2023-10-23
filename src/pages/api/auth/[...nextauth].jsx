import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import users from "@/data/users";

const GOOGLE_CLIENT_ID =
  "393275174212-0ukf0q698qg0og72alld45oqrta3tbta.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) return null;

        const currentUser = users.find(
          (user) => user.email === credentials.email
        );

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass;
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
