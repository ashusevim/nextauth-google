import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_AUTH_ID as string,
            clientSecret: process.env.GOOGLE_AUTH_SECRET as string
        })
    ]
}