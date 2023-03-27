import { INews, INewsSource } from "./news.types";
import ROUTES_MAP from "../../constants/routes";

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
    title: "Search",
    icon: "🔍",
    slug: ROUTES_MAP.discover.discover("search"),
  },
];

const TOPICS: INews[] = [
  {
    id: 1,
    title: "Sports",
    icon: "⚽",
    slug: ROUTES_MAP.topics.topic("sports"),
  },
  {
    id: 2,
    title: "Entertainment",
    icon: "🎬",
    slug: ROUTES_MAP.topics.topic("entertainment"),
  },
  {
    id: 3,
    title: "Business",
    icon: "💼",
    slug: ROUTES_MAP.topics.topic("business"),
  },
  {
    id: 4,
    title: "Technology",
    icon: "🖥️",
    slug: ROUTES_MAP.topics.topic("tech"),
  },
  {
    id: 5,
    title: "Politics",
    icon: "🗳️",
    slug: ROUTES_MAP.topics.topic("politics"),
  },
];

const SIDEBAR_MENUS: INewsSource[] = [
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
