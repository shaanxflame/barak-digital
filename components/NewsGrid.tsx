import ArticleCard from "./ArticleCard";

export default function NewsGrid({ articles }: { articles: any[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </div>
    </div>
  );
}
