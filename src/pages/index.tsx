// pages/index.tsx
import { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Google Login - My Next.js TypeScript App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 flex flex-col items-center justify-center">
        {!session ? (
          <>
            <h1 className="text-4xl font-bold text-center mb-4">
              Welcome to My Next.js App
            </h1>
            <p className="mb-8 text-lg text-center">
              Please log in using your Google account.
            </p>
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign in with Google
            </button>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center mb-4">
              Welcome, {session.user?.name}!
            </h1>
            <p className="mb-8 text-lg text-center">
              You are logged in with {session.user?.email}.
            </p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign out
            </button>
          </>
        )}
        <Footer />
      </main>
    </div>
  );
};

export default Home;