// hooks/useAuth.ts
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function useAuth({ redirectTo = "" } = {}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session && redirectTo) router.push(redirectTo); // Redirect if not authenticated
  }, [session, status]);

  return { session, status, signIn };
}
