import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charizard17 Portfolio Website</title>
        <meta
          name="description"
          content="In this page, you can find some of my projects and my contact info"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-blue-700 min-h-screen">
          <h1 className="text-3xl font-bold underline text-red-500">
            Hello world!
          </h1>
        </section>
      </main>
    </>
  );
}
