import { Check } from "lucide-react";

export default function Details() {
  const bullets = [
    "Soft-focus blur for pores and fine lines",
    "Oil-controlling formula with breathable comfort",
    "Dermatologist tested for sensitive skin",
    "Cruelty-free, vegan, and fragrance-free",
  ];

  return (
    <section id="details" className="w-full max-w-6xl mx-auto px-6 mt-6 mb-20 grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">Why you'll love it</h3>
        <ul className="mt-4 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-gray-700">
              <Check className="h-5 w-5 mt-0.5 text-green-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-neutral-50 border border-black/5 rounded-xl p-6">
        <h4 className="text-sm font-medium text-gray-900">How to apply</h4>
        <p className="text-sm text-gray-600 mt-2">
          Swirl a fluffy brush into the compact and sweep over skin for a soft matte finish. 
          For more coverage, press and roll with a sponge. Touch up shine through the day without caking.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-gray-600">
          <div className="p-3 rounded-lg bg-white border border-black/5">Powder • Matte</div>
          <div className="p-3 rounded-lg bg-white border border-black/5">Buildable • Breathable</div>
          <div className="p-3 rounded-lg bg-white border border-black/5">Photo-ready • Natural</div>
        </div>
      </div>
    </section>
  );
}
