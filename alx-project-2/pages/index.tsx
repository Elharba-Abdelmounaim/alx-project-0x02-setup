import Header from '../components/layout/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ALX Next.js Project!
        </h1>
      </main>
    </>
  )
}
