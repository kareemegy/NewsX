enum ROUTES {
  home = "home",
  discover = "discover",
  topics = "topics",
  search = "search",
}

interface IRouteMap {
  [ROUTES.home]: string;
  [ROUTES.discover]: {
    base: string;
    discover: (type: string) => string;
  };
  [ROUTES.topics]: {
    base: string;
    topic: (topic: string) => string;
  };
  [ROUTES.search]: {
    base: string;
    search: (query: string) => string;
  };
}

const $ = (path: string) => `/${path}`;

const ROUTES_MAP: IRouteMap = {
  [ROUTES.home]: "/",
  [ROUTES.discover]: {
    base: $(ROUTES.discover),
    discover: (type: string) => $(ROUTES.discover) + `/${type}`,
  },
  [ROUTES.topics]: {
    base: $(ROUTES.topics),
    topic: (topic: string) => $(ROUTES.topics) + `/${topic}`,
  },
  [ROUTES.search]: {
    base: $(ROUTES.search),
    search: (query: string) => $(ROUTES.search) + `/${query}`,
  },
};

export default ROUTES_MAP;
