import ListingsGrid from '@/components/ListingsGrid';
import { listings } from '@/lib/data';

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Listings</h1>
      <ListingsGrid listings={listings} />
    </div>
  );
}