"use client"
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { runNewsScraper } from "@/lib/scraper";
import { DashboardHeader } from "../components/DashboardHeader";
import { ScraperFilter } from "../components/ScraperFilter";
import { ArticleGrid } from "../components/ArticleGrid";
import { FloatingMenu } from "@/components/FloatingMenu";

const SCRAPER_OPTIONS = [
  { id: "hackernews", label: "Hacker News" },
  { id: "g1-tecnologia", label: "G1 Tecnologia" },
  { id: "all", label: "Todos" },
];

export default function Page() {
  const [articles, setArticles] = useState<any[]>([]);
  const [selectedScraper, setSelectedScraper] = useState("all");
  const [loading, setLoading] = useState(false);

  async function loadArticles() {
    const data = await apiGet<any[]>("/articles?limit=50");
    setArticles(data);
  }

  useEffect(() => {
    loadArticles();
  }, []);

  async function handleRunScraper() {
    setLoading(true);
    await runNewsScraper(selectedScraper);
    const articles = await apiGet<any[]>("/articles?limit=50");
    setArticles(articles);
    await loadArticles();
    setLoading(false);
  }

  const filtered =
    selectedScraper === "all"
      ? articles
      : articles.filter((a) => a.source === selectedScraper);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
        <DashboardHeader
          onRun={handleRunScraper}
          onRefresh={loadArticles}
          loading={loading}
        />

        <ScraperFilter
          options={SCRAPER_OPTIONS}
          initial="all"
          onChange={setSelectedScraper}
        />

        <ArticleGrid articles={filtered} />
        <FloatingMenu/>
      </div>
    </main>
  );
}