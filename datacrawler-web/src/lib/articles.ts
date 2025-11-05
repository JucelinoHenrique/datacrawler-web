import { apiGet } from "./api";

export type Article ={
    id: number;
    title: string;
    url: string;
    source: string;
    created_at?:string
}

export async function getArticles(limit = 50): Promise<Article[]>{
    return apiGet<Article[]>(`/articles?limit=${limit}`)
}