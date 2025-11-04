const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "";

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro ${res.status}: ${text}`);
  }

  return res.json();
}

export async function apiGet<T>(endpoint: string): Promise<T> {
  return request<T>(endpoint, { method: "GET" });
}

export async function apiPost<T>(endpoint: string, body?: any): Promise<T> {
  return request<T>(endpoint, {
    method: "POST",
    body: body ? JSON.stringify(body) : undefined,
  });
}