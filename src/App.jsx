import Header from "./components/Header";
import ProductHero from "./components/ProductHero";
import ShadeStrip from "./components/ShadeStrip";
import Details from "./components/Details";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-rose-50 text-gray-900">
      <Header />

      <main className="pb-20">
        <ProductHero />
        <ShadeStrip />
        <Details />
      </main>

      <footer className="text-center text-xs text-gray-500 pb-10">
        Shot in natural lighting on a neutral background to highlight true color. © {new Date().getFullYear()} TWC Beauty
      </footer>
    </div>
  );
}

export default App;
