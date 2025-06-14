// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-6">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}
