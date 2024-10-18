import Link from 'next/link';
import Image from 'next/image';
import { Listing } from '@/lib/types';

interface ListingsGridProps {
  listings: Listing[];
}

export default function ListingsGrid({ listings }: ListingsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {listings.map((listing) => (
        <Link href={`/listings/${listing.id}`} key={listing.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <Image
            src={listing.imageUrl}
            alt={listing.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{listing.title}</h3>
            <p className="text-gray-600 mb-2">${listing.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500">{listing.bedrooms} beds • {listing.bathrooms} baths • {listing.squareFeet} sqft</p>
          </div>
        </Link>
      ))}
    </div>
  );
}