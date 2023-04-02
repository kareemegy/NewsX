class Fetcher {
  private baseURL: string = import.meta.env.VITE_NEWS_BASE_URL;
  private apiKey: string = import.meta.env.VITE_NEWS_API_KEY;
  constructor() {
    this.baseURL = import.meta.env.VITE_NEWS_BASE_URL;
    this.apiKey = import.meta.env.VITE_NEWS_API_KEY;
    console.log("Fetcher", this.baseURL, this.apiKey);
  }
  fetchBase = async (url: string, request?: RequestInit) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": this.apiKey,
        "Access-Control-Allow-Origin": "*",
      },
    };

    // Object.assign(requestOptions, request);
    // if (request) {
    // }

    let endpoint = `${this.baseURL}${url}`;
    return await fetch(endpoint, requestOptions);
  };
}

const fetcher = new Fetcher().fetchBase;

export default fetcher;
