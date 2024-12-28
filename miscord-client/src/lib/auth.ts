import prisma from "@/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials: any) {
        const existingUser = await prisma.user.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password,
          },
          select: {
            id: true,
            username: true,
            avatarUrl: true,
            createdAt: true,
          },
        });

        if (existingUser) {
          return existingUser;
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
});
