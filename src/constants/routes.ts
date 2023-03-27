enum ROUTES {
  home = "home",
  discover = "discover",
  topics = "topics",
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
};

export default ROUTES_MAP;
