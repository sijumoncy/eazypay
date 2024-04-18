"use client";
import { Appbar } from "@repo/ui/appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Page(): JSX.Element {
  const session = useSession();

  return (
    <main className="">
      <Appbar
        onSignin={signIn}
        onSignout={signOut}
        user={session?.data?.user}
      />
    </main>
  );
}
