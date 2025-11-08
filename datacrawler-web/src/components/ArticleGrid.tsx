import { ArticleCard } from "./ArticleCard";

type ArticleGridProps = {
  articles: any[];
};

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </div>
  );
}
