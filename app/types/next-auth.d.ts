import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    guestId: string; // add your custom field here
  }

  interface Session {
    user: User;
  }
}
