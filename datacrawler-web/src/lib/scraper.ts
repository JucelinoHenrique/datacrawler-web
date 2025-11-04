import {apiPost} from "./api";

export async function runHackerNewsScraper() {
    return apiPost("/scrape/hackernews")
    
}