import cn from "classnames";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Heading from "../../components/Heading";
import { useUI } from "../../contexts/UIContext";
import { useEffect, useState } from "react";
import ROUTES_MAP from "../../constants/routes";
import { auth, getUserSettings } from "../../lib/Firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Sidebar = () => {
  const { isMenuShrunk, isSidebarOpen } = useUI();

  return (
    <aside
      className={cn(
        "fixed transition-all duration-300 flex h-screen top-[64px] inset-y-0 shadow-dark-md bg-secondary  text-primary",
        {
          "left-0": isSidebarOpen,
          "-left-full sm:left-0": !isSidebarOpen,
        }
      )}
    >
      <CollapseMenuButton />
      <div
        className={cn(" h-full overflow-hidden transition-all ease-in-out ", {
          "w-16": isMenuShrunk,
          "w-60": !isMenuShrunk,
        })}
      >
        <List />
      </div>
    </aside>
  );
};

export default Sidebar;

const List = () => {
  const { isMenuShrunk } = useUI();
  const navigate = useNavigate();
  const [menus, setMenus] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const DISCOVER = [
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
    try {
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
    } catch (error) {
      console.error("error", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const unSubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            const TOPICS = await getTopics();
            const data = [
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
            setMenus(data);
            setLoading(false);
          }
        });

        return () => unSubscribe();
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ul className="p-1 mt-10">
        {menus.map(({ id, title, data }: any) => (
          <li className="p-2" key={id}>
            <div
              className={`transition-all ease-out duration-200 ${
                isMenuShrunk ? "opacity-0" : "delay-300 opacity-1"
              }`}
            >
              <Heading as="h4">{title}</Heading>
            </div>

            <div className="ml-3 mb-3">
              {data?.map(({ id, icon, title, slug }: any) => (
                <Button
                  className="mb-4 mt-2 whitespace-nowrap"
                  key={id}
                  icon={icon}
                >
                  <div
                    onClick={() => navigate(slug)}
                    className={`transition-all ease-out duration-200 ${
                      isMenuShrunk ? "opacity-0" : "delay-300 opacity-1"
                    }`}
                  >
                    {title}
                  </div>
                </Button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const CollapseMenuButton = () => {
  const { isMenuShrunk, toggleMenu } = useUI();

  return (
    <div className="absolute top-5 right-0">
      <Button
        handleClick={toggleMenu}
        className="p-2.5 items-center justify-center bg-slate-100"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "transition-all pointer-events-none stroke-black duration-500",
            {
              "rotate-90": isMenuShrunk,
              "-rotate-90": !isMenuShrunk,
            }
          )}
        >
          <path
            d="M12.56 7.23l6.752 6.604c.254.254.253.694-.018.965a.695.695 0 01-.983 0L12 8.68l-6.29 6.098c-.294.293-.734.294-1.005.022a.695.695 0 010-.983l6.716-6.568a.8.8 0 011.14-.018z"
            fill="currentcolor"
            fillRule="evenodd"
          ></path>
        </svg>
      </Button>
    </div>
  );
};
