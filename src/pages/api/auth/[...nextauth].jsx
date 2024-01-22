import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import users from "@/data/users";
import CredentialsProvider from "next-auth/providers/credentials";
import $api from "@/profileRequests/configeAxios";
const GOOGLE_CLIENT_ID =
  "393275174212-0ukf0q698qg0og72alld45oqrta3tbta.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        console.log("good");
        if (!credentials.email || !credentials.password) return null;

        try {
          // Получить всех пользователей
          const req = await $api.get("/users");
          const usersData = req.data;

          // Выполнить проверку для каждого пользователя параллельно
          const authorizedUser = await Promise.all(
            usersData.map(async (user) => {
              if (
                user.email === credentials.email &&
                user.password === credentials.password
              ) {
                const { password, ...userWithoutPass } = user;
                return userWithoutPass;
              }
              return null;
            })
          );

          // Найти первого успешно авторизованного пользователя
          const authenticatedUser = authorizedUser.find(
            (user) => user !== null
          );

          return authenticatedUser;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  secret: "IamVeryHandsome",
};
export default NextAuth(authOptions);
