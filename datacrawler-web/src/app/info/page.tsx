import { FloatingMenu } from "@/components/FloatingMenu";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:px-6">
        <header className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-white shadow-sm">
          <h1 className="text-3xl font-bold tracking-tight">
            Informações do Projeto
          </h1>
        </header>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Objetivo
            </p>
            <h2 className="mt-2 text-base font-semibold text-slate-900">
              O que o projeto faz
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Coleta artigos de fontes públicas via scrapers, salva no backend
              e exibe em uma interface rápida feita em Next.js.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Backend
            </p>
            <h2 className="mt-2 text-base font-semibold text-slate-900">
              FastAPI + Scraping
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              API em FastAPI, Pydantic para validação, SQLAlchemy para persistência
              e scrapers assíncronos usando httpx + BeautifulSoup4.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Frontend
            </p>
            <h2 className="mt-2 text-base font-semibold text-slate-900">
              Next.js + Tailwind
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Consome a API, mostra cards de notícias e tem um menu flutuante
              para navegação. Focado em UX simples.
            </p>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">
              Tecnologias Utilizadas
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Stack moderna e fácil de manter.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-800">Frontend:</span>{" "}
                Next.js, TypeScript, Tailwind CSS
              </li>
              <li>
                <span className="font-medium text-slate-800">Backend:</span>{" "}
                FastAPI (Python 3.14), Pydantic
              </li>
              <li>
                <span className="font-medium text-slate-800">Scraping:</span>{" "}
                httpx, BeautifulSoup4, base de scrapers
              </li>
              <li>
                <span className="font-medium text-slate-800">
                  Persistência:
                </span>{" "}
                SQLAlchemy + SQLite (dev)
              </li>
              <li>
                <span className="font-medium text-slate-800">
                  Qualidade de código:
                </span>{" "}
                Black, Ruff, Isort, Pre-commit
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-lg font-semibold text-slate-900">
              Padrões e Decisões
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Focado em organização e extensibilidade.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Separação clara: API x Scrapers x DB</li>
              <li>Rotas de scrape por fonte (ex.: /scrape/hackernews)</li>
              <li>Schemas Pydantic compartilhados entre entrada/saída</li>
              <li>Pronto para adicionar novas fontes de dados</li>
              <li>Frontend desacoplado consumindo REST</li>
            </ul>
          </div>
        </section>
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">
            Como rodar
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Pensado para ser fácil de demonstrar em ambiente de teste.
          </p>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Backend
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  poetry run uvicorn app.main:app --reload
                </code>
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400">
                Frontend
              </p>
              <p className="mt-1 text-sm text-slate-600">
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  npm run dev
                </code>
              </p>
            </div>
          </div>
        </section>
      </div>
      <FloatingMenu/>
    </main>
  );
}
