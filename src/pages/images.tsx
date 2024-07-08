// src/pages/images.tsx
import { NextPage } from "next";
import Head from "next/head";
import ImageList from "./api/ImageList";
import Footer from "../components/Footer";

const ImagesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uploaded Images - My Next.js App</title>
        <meta name="description" content="View all uploaded images." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        <section className="py-20">
          <div className="container mx-auto">
            <ImageList />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ImagesPage;
