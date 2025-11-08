import { apiPost } from "./api";

const SCRAPER_ENDPOINTS: Record<string, string> = {
  hackernews: "/scrape/hackernews",
  "g1-tecnologia": "/scrape/g1",
  all: "/scrape/all",
};

export async function runNewsScraper(source: string) {
  const endpoint = SCRAPER_ENDPOINTS[source];

  if (!endpoint) {
    throw new Error(`Scraper desconhecido: ${source}`);
  }

  return apiPost(endpoint);
}