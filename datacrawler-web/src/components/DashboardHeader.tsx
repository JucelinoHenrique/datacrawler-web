type DashboardHeaderProps = {
  onRun: () => void;
  onRefresh: () => void;
  loading?: boolean;
};

export function DashboardHeader({ onRun, onRefresh, loading }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold tracking-wide text-emerald-600">
          DATACRAWLER HUB
        </p>
        <h1 className="text-3xl font-bold text-slate-900">
          Ciência & Tecnologia
        </h1>
        <p className="text-sm text-slate-500">
          Últimas entradas coletadas pelos scrapers.
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onRun}
          disabled={loading}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? "Rodando..." : "Rodar Scraper"}
        </button>
        <button
          onClick={onRefresh}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}
