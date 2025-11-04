"use client";

import { useEffect, useState } from "react";
import { getArticles, type Article } from "@/lib/articles";
import { ArticleCard } from "../components/ArticleCard";
import { FiRefreshCw } from "react-icons/fi";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function load() {
    try {
      setLoading(true);
      const data = await getArticles(50);
      setArticles(data);
      setError(null);
    } catch (e: any) {
      setError(e?.message ?? "Erro ao buscar artigos");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 p-6">
        {/* topo */}
        <header className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-tight text-emerald-700">
              DataCrawler Hub
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Ciência & Tecnologia
            </h1>
            <p className="text-sm text-slate-500">
              Últimas entradas coletadas pelos scrapers.
            </p>
          </div>
          <button
            onClick={load}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Atualizar
          </button>
        </header>

        {/* estados */}
        {loading && (
          <p className="text-sm text-slate-500">Carregando artigos...</p>
        )}

        {error && !loading && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {/* grid principal */}
        {!loading && !error && (
          <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {articles.length === 0 ? (
              <p className="text-sm text-slate-400">
                Nenhum artigo encontrado. Rode o scraper no backend.
              </p>
            ) : (
              articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  url={article.url}
                  source={article.source}
                  createdAt={article.created_at}
                />
              ))
            )}
          </section>
        )}
      </div>
    </main>
  );
}
