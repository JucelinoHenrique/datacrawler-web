const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  if (!BASE_URL) throw new Error("NEXT_PUBLIC_API_URL não definida");
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    // evita cache agressivo no dev
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`GET ${path} falhou: ${res.status} ${res.statusText} ${body}`);
  }
  return res.json() as Promise<T>;
}