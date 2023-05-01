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
        <div className="flex flex-col justify-center w-[500px]">
          <h1 className="text-6xl mb-8 font-bold">
            Your Source for{" "}
            <span className=" text-blue">Fast and Reliable</span> News Coverage
          </h1>
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
