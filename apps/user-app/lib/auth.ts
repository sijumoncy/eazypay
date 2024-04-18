import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { hash, compareHashed } from "@repo/utils/hashUtils";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "9900110011",
        },
        password: { label: "Password", type: "password" },
      },
      // TODO: User credentials type from next-auth
      async authorize(credentials: any) {
        console.log("crednitails : ", {credentials});
        
        // TODO : zod validation, OTP validation here
        const hashedPassword = await hash(credentials.password, 10);
        // TODO: Refactor to util function
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          console.log("exisitng user ===== : ", existingUser);
          
          const validatePassword = await compareHashed(
            credentials.password,
            existingUser.password
          );
          if (validatePassword) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }
          return null;
        }

        try {
          console.log("new user ==============");
          
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedPassword,
            },
          });

          console.log("new user created ======>>>>> ", user);
          

          return {
            id: user.id.toString(),
            name: user.name,
            email: user.number,
          };
        } catch (e) {
          console.error(e);
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // TODO: fix the type here? instead of Using any
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
