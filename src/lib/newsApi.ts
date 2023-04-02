import warning from "../utils/warning";
import fetcher from "./Fetcher/Fetcher";

export const getNews = async (
  topic: string,
  page: string | number = 1,
  controller: AbortController
) => {
  try {
    const response = await fetcher(`?q=${topic}&page_size=50&page=${page}`, {
      signal: controller.signal,
    });

    return formattedOutput(response, (data: any) => data.articles);
  } catch (err: any) {
    warning(err);
    return {
      data: null,
      ok: false,
      status: 400,
      error: err,
    };
  }
};

const formattedOutput = async (
  response: Response,
  shapeData?: (data: any) => any
) => {
  let data = null;
  if (response.status === 200) {
    data = await response.json();
    if (shapeData) {
      data = shapeData(data);
    }
  }
  return {
    data,
    ok: response.ok,
    status: response.status,
    error: null,
  };
};
