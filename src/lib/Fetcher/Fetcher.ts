class Fetcher {
  private baseURL: string = import.meta.env.VITE_NEWS_BASE_URL;
  private apiKey: string = import.meta.env.VITE_NEWS_API_KEY;
constructor() {
    this.baseURL = import.meta.env.VITE_NEWS_BASE_URL;
    this.apiKey = import.meta.env.VITE_NEWS_API_KEY;
  }
  fetchBase = async (url: string, request?: RequestInit) => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (request) {
      Object.assign(requestOptions, request);
    }

    let endpoint = `${this.baseURL}${url}`;
    if (url.includes("?")) {
      endpoint = `${endpoint}&apiKey=${this.apiKey}`;
    } else {
      endpoint = `${endpoint}?apiKey=${this.apiKey}`;
    }
    return await fetch(endpoint, request);
  };
}

const fetcher = new Fetcher().fetchBase;

export default fetcher;
