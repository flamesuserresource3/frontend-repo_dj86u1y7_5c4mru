import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Sneakers",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    rating: 4.5,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Leather Backpack",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
    badge: "New",
  },
  {
    id: 3,
    name: "Minimal Watch",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Noise-cancel Headphones",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1518441902111-a2e2a0b89e23?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
  },
];

function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 font-medium">{product.name}</h3>
          <p className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">${product.price}</p>
        </div>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-600">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span>{product.rating}</span>
          <span className="mx-1">•</span>
          <button className="rounded-full border border-gray-200 px-3 py-1 text-xs hover:bg-gray-50">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductSection() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Trending now</h2>
          <p className="mt-1 text-sm text-gray-600">Browse our most-loved picks</p>
        </div>
        <a href="#" className="text-sm font-medium text-black hover:underline">
          View all
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
