import { Star } from "lucide-react";

export default function ProductHero() {
  return (
    <section id="product" className="w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
          TWC Make Over Powder Foundation
        </h2>
        <p className="mt-4 text-gray-600">
          A silky, buildable powder foundation that evens tone, controls shine, and looks like real skin in every light. Designed for photo-ready perfection.
        </p>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex items-center text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400" />
            ))}
          </div>
          <p className="text-sm text-gray-500">4.9/5 from 2,134 reviews</p>
        </div>
        <div className="mt-8 flex gap-3">
          <a href="#shades" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black transition">Find your shade</a>
          <a href="#details" className="px-5 py-3 rounded-md border border-gray-200 text-gray-700 hover:border-gray-300 transition">Learn more</a>
        </div>
      </div>

      <div className="order-1 md:order-2">
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1610484826967-09c5720778c5?q=80&w=1600&auto=format&fit=crop"
            alt="Close-up of a hand holding TWC powder foundation compact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
        </div>
        <p className="mt-3 text-center text-sm text-gray-500">
          Natural light • Neutral background • True-to-color
        </p>
      </div>
    </section>
  );
}
