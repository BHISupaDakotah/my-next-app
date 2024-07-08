// app/about.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import ImageUploadForm from './ImageUploadForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta name="description" content="Learn more about our team and mission." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
        
        <section className="hero bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold">Who We Are</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              We are a team of passionate developers and designers dedicated to building innovative web solutions.
            </p>
          </div>
        </section>

        <section className="features py-20">
          <div className="container mx-auto">
            <ImageUploadForm />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
