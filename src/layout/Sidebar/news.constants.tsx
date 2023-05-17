import { INews } from "./news.types";
import ROUTES_MAP from "../../constants/routes";
import { getUserSettings } from "../../lib/Firebase/Firebase";

const DISCOVER: INews[] = [
  {
    id: 1,
    title: " Top headlines",
    icon: "📰",
    slug: ROUTES_MAP.discover.discover("headlines"),
  },
  {
    id: 2,
    title: "Trending",
    icon: "🔥",
    slug: ROUTES_MAP.discover.discover("trend"),
  },
  {
    id: 3,
    title: "Most Popular",
    icon: "👍",
    slug: ROUTES_MAP.discover.discover("popular"),
  },
  {
    id: 4,
    title: "Breaking News",
    icon: "🚨",
    slug: ROUTES_MAP.discover.discover("breaking News"),
  },
];

const getTopics = async () => {
  const userSettings = await getUserSettings();
  const topics = userSettings?.topics;
  const topicsArray = topics?.map(({ id, title, icon }: any) => {
    return {
      id: id,
      title: title,
      icon: icon,
      slug: ROUTES_MAP.topics.topic(title),
    };
  });
  return topicsArray;
};

const TOPICS: INews[] = await getTopics();

const SIDEBAR_MENUS: any = [
  {
    id: 1,
    title: "Discover",
    data: DISCOVER,
  },
  {
    id: 2,
    title: "Topics",
    data: TOPICS,
  },
];

export default SIDEBAR_MENUS;
