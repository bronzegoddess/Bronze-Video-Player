import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bronze Video Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Video Player" />
        <p className="description">
          Hello <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
