import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">LuxeHomes</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/listings" className="hover:text-blue-600">Listings</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}