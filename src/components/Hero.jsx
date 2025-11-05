import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            Trusted by 50k+ shoppers
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Discover products you’ll love
          </h1>
          <p className="mt-4 max-w-xl text-gray-600">
            Shop new arrivals, curated collections, and bestsellers from top brands. Fast shipping and free returns.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white shadow-sm transition hover:opacity-90"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-gray-300 px-6 py-3 text-sm hover:bg-gray-50">
              View Deals
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1600&auto=format&fit=crop"
              alt="Featured products"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-amber-200/50 blur-2xl" />
          <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 rounded-full bg-blue-200/50 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
