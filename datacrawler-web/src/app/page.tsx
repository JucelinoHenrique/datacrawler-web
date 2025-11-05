"use client";

import { useEffect, useState } from "react";
import { getArticles, type Article } from "@/lib/articles";
import { ArticleCard } from "../components/ArticleCard";
import { FiPlayCircle, FiRefreshCw } from "react-icons/fi";
import { runHackerNewsScraper } from "@/lib/scraper";
import { FloatingMenu} from "@/components/FloatingMenu";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

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
  async function scrapeNow() {
    try {
      setScraping(true);
      setMessage(null);
      await runHackerNewsScraper();
      setMessage("Scraper executado com sucesso ✅");
      await load();
    } catch (e: any) {
      setError(e?.message ?? "Erro ao executar scraper");
    } finally {
      setScraping(false);
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
      <FloatingMenu/>
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
           <div className="flex gap-2">
            <button
              onClick={scrapeNow}
              disabled={scraping}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-emerald-300"
            >
              <FiPlayCircle className={scraping ? "animate-spin" : ""} />
              {scraping ? "Executando..." : "Rodar Scraper"}
            </button>

            <button
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              <FiRefreshCw className={loading ? "animate-spin" : ""} />
              Atualizar
            </button>
          </div>
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
