export default function ShadeStrip() {
  const shades = [
    { name: "Porcelain", hex: "#F3E7DA" },
    { name: "Ivory", hex: "#E9D7C3" },
    { name: "Beige", hex: "#D8BFA6" },
    { name: "Sand", hex: "#C6A485" },
    { name: "Honey", hex: "#B58769" },
    { name: "Caramel", hex: "#9C6B4F" },
    { name: "Mocha", hex: "#7E523A" },
    { name: "Espresso", hex: "#5C3A2A" },
  ];

  return (
    <section id="shades" className="w-full max-w-6xl mx-auto px-6 my-14">
      <h3 className="text-2xl font-semibold text-gray-900">Shade range</h3>
      <p className="text-gray-600 mt-1">Eight flexible tones designed to match and blend seamlessly.</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {shades.map((s) => (
          <div key={s.name} className="group">
            <div
              className="aspect-square rounded-lg shadow-sm border border-black/5"
              style={{ backgroundColor: s.hex }}
              aria-label={`${s.name} shade`}
            />
            <p className="mt-2 text-xs text-gray-600 text-center group-hover:text-gray-900 transition">{s.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
