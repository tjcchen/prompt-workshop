import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 10000,
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      httpOptions: {
        timeout: 10000,
      }
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email
      });
      session.user.id = sessionUser?._id?.toString();
      return session;
    },
    async signIn({ profile }) {
      try {
        // serverless -> lambda -> dynamodb
        // this kind of function opens up only when it gets called
        await connectToDB();
  
        // 1. check if a user already exists
        const userExists = await User.findOne({
          email: profile.email
        });
  
        // 2. if not, create a new user, then write to DB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture || profile.avatar_url // this image property may be different among providers
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    }
  },
});

export { handler as GET, handler as POST };