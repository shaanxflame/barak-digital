import Image from "next/image";

export default function ArticleCard({ article }: { article: any }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <Image
        src={article.image}
        alt={article.title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs uppercase text-blue-600 font-semibold">
          {article.category}
        </span>
        <h4 className="text-lg font-bold mt-2">{article.title}</h4>
        <p className="text-sm text-gray-600 mt-2">{article.description}</p>
        <p className="text-xs text-gray-400 mt-2">{article.date}</p>
      </div>
    </div>
  );
}
