import { listings } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = listings.find((listing) => listing.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={property.imageUrl}
            alt={property.title}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-2xl font-bold mb-4">${property.price.toLocaleString()}</p>
          <p className="mb-4">{property.description}</p>
          <ul className="space-y-2">
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            <li><strong>Square Feet:</strong> {property.squareFeet}</li>
            <li><strong>Year Built:</strong> {property.yearBuilt}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}