import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-xl mb-8">Discover luxurious properties in prime locations</p>
        <Link href="/listings" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
          View Listings
        </Link>
      </div>
    </div>
  );
}