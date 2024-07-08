// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { getEnv } from "../../../utils/env";
import { getEnv } from "@/utils/env";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: getEnv("GOOGLE_CLIENT_ID"),
      clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
    }),
  ],
  secret: getEnv("NEXTAUTH_SECRET"),
});
