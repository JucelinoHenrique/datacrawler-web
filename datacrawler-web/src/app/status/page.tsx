"use client";

import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import { FiActivity } from "react-icons/fi";

type HealthResponse = { status: string };

export default function StatusPage() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const res = await apiGet<HealthResponse>("/health");
      setData(res);
      setError(null);
    } catch (e: any) {
      setError(e?.message ?? "Erro ao consultar /health");
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="mx-auto max-w-xl p-6">
      <h1 className="flex items-center gap-2 text-2xl font-bold">
        <FiActivity className="text-emerald-600" />
        Status do Backend
      </h1>

      <div className="mt-4 rounded-lg border p-4">
        {loading && <p className="text-gray-500">Verificando...</p>}

        {!loading && error && (
          <div className="space-y-2">
            <p className="font-medium text-red-600">Offline</p>
            <pre className="whitespace-pre-wrap rounded bg-red-50 p-3 text-sm text-red-700">
              {error}
            </pre>
            <button
              onClick={load}
              className="rounded bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700"
            >
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && data && (
          <div className="space-y-2">
            <p className="font-medium text-emerald-700">Online</p>
            <pre className="rounded bg-emerald-50 p-3 text-sm text-emerald-800">
              {JSON.stringify(data, null, 2)}
            </pre>
            <button
              onClick={load}
              className="rounded bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700"
            >
              Atualizar
            </button>
          </div>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        API: <code className="rounded bg-gray-100 px-1">{process.env.NEXT_PUBLIC_API_URL}</code>
      </p>
    </main>
  );
}