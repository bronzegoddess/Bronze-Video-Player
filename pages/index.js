import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bronze Video Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Hello <code>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
