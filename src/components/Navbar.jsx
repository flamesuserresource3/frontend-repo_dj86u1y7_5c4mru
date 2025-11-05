import { ShoppingCart, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white font-bold">
            e
          </span>
          <span className="text-xl font-semibold tracking-tight">eCommerce</span>
        </a>

        <div className="hidden md:flex w-full max-w-lg items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2">
          <Search className="h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search products, brands, and more"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <nav className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm hover:bg-gray-50">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </button>
          <button className="relative rounded-full border border-gray-200 p-2 hover:bg-gray-50">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-black px-1 text-xs font-medium text-white">2</span>
          </button>
        </nav>
      </div>

      <div className="mx-auto hidden max-w-7xl items-center gap-6 px-4 pb-3 text-sm text-gray-600 md:flex">
        <a href="#" className="hover:text-black">New Arrivals</a>
        <a href="#" className="hover:text-black">Men</a>
        <a href="#" className="hover:text-black">Women</a>
        <a href="#" className="hover:text-black">Accessories</a>
        <a href="#" className="hover:text-black">Sale</a>
      </div>
    </header>
  );
}
