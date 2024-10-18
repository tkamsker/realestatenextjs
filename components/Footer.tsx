export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LuxeHomes Real Estate</h3>
            <p>Find your dream home with us.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>123 Main St, Anytown, USA</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@luxehomes.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-blue-600">Twitter</a>
              <a href="#" className="hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 LuxeHomes Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}