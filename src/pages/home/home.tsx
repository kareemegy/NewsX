import Button from "../../components/button/button";

const Home = () => {
  return (
    <>
      <nav className="container mx-auto px-4 mt-9 flex justify-between">
        <img
          className="w-[190px]"
          src="src/assets/imgs/logo-black.svg"
          alt="News LOGO"
        />
        <Button className="bg-blue px-8 py-3 rounded-md text-2xl text-white">
          Login
        </Button>
      </nav>
      <main className="container mx-auto px-4 mt-[40px] flex justify-between h-[600px]">
        <div className="flex flex-col justify-center w-[500px] ">
          <h1 className="text-6xl mb-8 font-bold">
            Your Source for{" "}
            <span className=" text-blue">Fast and Reliable</span> News Coverage
          </h1>
          <div className="relative top-0">
            <svg
              className="absolute w-72 md:w-96 -right-24 -top-[250px]"
              width="395"
              height="249"
              viewBox="0 0 395 249"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198.861 231.832C90.5984 199.942 -65.8655 63.6109 29.654 13.4247C69.206 -7.35606 99.4642 0.847046 143.831 6.12572C261.437 20.1182 366.758 133.203 390.716 182.237C414.675 231.271 334.189 271.696 198.861 231.832Z"
                fill="#697CE3"
                fill-opacity="0.1"
              ></path>
            </svg>
          </div>
          <p className="text-xl">
            The NEWSX allows users to search for articles from a vast range of
            sources, including over 30,000 news sources and blogs. Users can
            either browse the top headlines or use the search functionality to
            find specific articles. This provides users with a comprehensive and
            diverse collection of news resources to stay informed about current
            events.
          </p>
        </div>
        <div className="self-center">
          <img
            className="h-[525px]"
            src="src/assets/imgs/planet.webp"
            alt="plant"
          />
        </div>
      </main>
    </>
  );
};

export default Home;
