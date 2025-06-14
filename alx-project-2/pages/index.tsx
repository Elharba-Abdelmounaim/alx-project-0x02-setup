import Head from "next/head";

export default function Home(){
  return(
    <>
      <Head>
        <title>WELCOME</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center" >
        <h1 className="text-4xl font-bold text-blue-500">
          Welcome to ALX next.js Project!
        </h1>
      </main>
    </>
  )
}