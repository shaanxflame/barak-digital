import Image from "next/image";

const trending = [
  { title: "Startup Funding Hits Record High", img: "/images/trending1.jpg" },
  { title: "Tech Giants Expand in Asia", img: "/images/trending2.jpg" },
];

export default function TrendingSidebar() {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Trending</h3>
      <ul className="space-y-4">
        {trending.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-3">
            <Image
              src={item.img}
              alt={item.title}
              width={80}
              height={60}
              className="rounded object-cover"
            />
            <span className="text-sm font-medium">{item.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
