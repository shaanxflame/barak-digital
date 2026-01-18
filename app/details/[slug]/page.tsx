"use client";

import { useParams } from "next/navigation";

export default function DetailPage() {
  const { slug } = useParams();

  // 📝 Temporary content – you’ll replace with real DB or static content later
  const details: Record<string, { title: string; description: string; image: string }> = {
    "cultural-fest": {
      title: "Barak Cultural Fest",
      description:
        "The Barak Cultural Fest brings people together with music, dance, and traditional food. Streets light up with parades and performances.",
      image: "https://source.unsplash.com/1200x600/?barak,festival",
    },
    "market-buzz": {
      title: "Local Market Buzz",
      description:
        "Silchar’s famous bazaar filled with spices, handicrafts, and food. A hotspot for both locals and tourists.",
      image: "https://source.unsplash.com/1200x600/?market,india",
    },
    "river-hotspot": {
      title: "Barak River Hotspot",
      description:
        "The Barak River has become a trending hangout spot with boating, photography, and cultural gatherings.",
      image: "https://source.unsplash.com/1200x600/?river,barak",
    },
  };

  const content = details[slug as string];

  if (!content) {
    return <p className="text-center py-12">Details not found!</p>;
  }

  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-green-700">{content.title}</h1>
      <img
        src={content.image}
        alt={content.title}
        className="rounded-2xl shadow-lg mb-6"
      />
      <p className="text-lg text-gray-700 leading-relaxed">{content.description}</p>
      <p className="text-lg text-gray-700 leading-relaxed mt-4">
        {/* 🔥 Here you can paste more details, photos, videos later */}
        Add more rich content, photos, or YouTube embeds here.
      </p>
    </main>
  );
}
