import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Next Auth",
      credentials: {},
      async authorize(credentials: any, req: any) {
        const user = {
          id: "1",
          name: "",
          email: credentials?.email,
          role: credentials?.role,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Callback function for JWT token
    jwt: async ({ token, user }) => {
      // Define types for token and user
      const typedToken: { [key: string]: any } = token;
      const typedUser: { [key: string]: any } = user;

      // Assign the role from user to token if user exists
      if (typedUser) {
        typedToken.role = typedUser.role;
      }

      // Return the updated token
      return Promise.resolve(token);
    },

    // Callback function for session
    session: async ({ session, token }) => {
      // Define types for session and token
      const typedSession: { [key: string]: any } = session;
      const typedToken: { [key: string]: any } = token;

      // Assign the role from token to session user if token exists
      if (typedToken) {
        typedSession.user.role = typedToken.role;
      }

      // Return the updated session
      return Promise.resolve(session);
    },
  },
};
