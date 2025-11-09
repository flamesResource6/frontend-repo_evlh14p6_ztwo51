import { Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-rose-300 to-amber-200 grid place-items-center shadow">
          <Sparkles className="h-5 w-5 text-gray-800" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">TWC Beauty</h1>
          <p className="text-xs text-gray-500">True Wear Compact</p>
        </div>
      </div>

      <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
        <a href="#product" className="hover:text-gray-900">Product</a>
        <a href="#shades" className="hover:text-gray-900">Shades</a>
        <a href="#details" className="hover:text-gray-900">Details</a>
      </nav>
    </header>
  );
}
