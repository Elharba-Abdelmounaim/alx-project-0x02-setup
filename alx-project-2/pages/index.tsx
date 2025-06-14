import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ALX Next.js Project!
        </h1>
      </main>
    </>
  )
}
