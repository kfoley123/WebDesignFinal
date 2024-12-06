import Card from "./Card";

export default function QuickShop() {
  const inStockItems = [
    { name: "Red Velvet Raspberry Cupcake", image: "/images/redvelvetraspberry.webp", id: 1 },
    { name: "Extreme Lemon Drop Deluxe Cupcake", image: "/images/lemon.webp", id: 2 },
    { name: "Chocolate Oreo Crumble Cupcake", image: "/images/chocolateoreo.webp", id: 3 },
    { name: "Hot Fudge Sundae Cupcake", image: "/images/hotfudgesundae.webp", id: 4 }
  ];

  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <a
        href="#"
        className="bg-pink-500 mt-12 text-white font-semibold text-2xl px-12 py-6 md:text-2xl md:px-18 md:py-6 rounded-lg shadow-md hover:bg-pink-600"
      >
        SHOP ALWAYS AVAILABLE
      </a>
    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {inStockItems.map(item => (
          <Card key={item.id} name={item.name} image={item.image} />
        ))}
      </div>
    </div>
  );
}
