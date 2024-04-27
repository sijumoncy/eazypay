"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";
import { useToggleSidebar } from "@repo/store/storeHooks";

export function AppbarClient() {
  const session = useSession();
  const router = useRouter();

  const { sidebarStatus, handleToggleSidebar } = useToggleSidebar();

  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignout={async () => {
          await signOut();
          router.push("/api/auth/signin");
        }}
        isAuthenticated={!!session.data?.user}
        fnToggleNav={handleToggleSidebar}
        toggleNav={sidebarStatus}
      />
    </div>
  );
}
