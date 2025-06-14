import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 w-full flex justify-center space-x-6">
      <Link href="/home" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
    </header>
  )
}
