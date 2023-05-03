enum ROUTES {
  home = "home",
  dashboard = "dashboard",
  login = "login",
  register = "register",
  discover = "discover",
  topics = "topics",
  search = "search",
}

interface IRouteMap {
  [ROUTES.home]: string;
  [ROUTES.dashboard]: string;
  [ROUTES.login]: string;
  [ROUTES.register]: string;
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
const $ = (path: string) => `/dashboard/${path}`;

const ROUTES_MAP: IRouteMap = {
  [ROUTES.home]: "/",
  [ROUTES.dashboard]: ROUTES.dashboard,
  [ROUTES.register]: ROUTES.register,
  [ROUTES.login]: ROUTES.login,
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
