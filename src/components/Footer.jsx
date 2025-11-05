export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">New Arrivals</a></li>
            <li><a href="#" className="hover:text-black">Bestsellers</a></li>
            <li><a href="#" className="hover:text-black">Gift Cards</a></li>
            <li><a href="#" className="hover:text-black">Sale</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Customer Service</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">Shipping</a></li>
            <li><a href="#" className="hover:text-black">Returns</a></li>
            <li><a href="#" className="hover:text-black">FAQ</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Press</a></li>
            <li><a href="#" className="hover:text-black">Sustainability</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-gray-600">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-black"
            />
            <button type="submit" className="rounded-full bg-black px-4 py-2 text-sm text-white">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} eCommerce. All rights reserved.
      </div>
    </footer>
  );
}
