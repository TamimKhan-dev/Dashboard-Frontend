import CallHistory from "../components/CallHistory";
import EmptyCalls from "../components/EmptyCalls";
import StatCards from "../components/StatCards";
import "./../index.css";

const Home = () => {
  const test = true;

  return (
    <>
      <div className="mb-7 md:flex md:justify-between items-center">
        <div className="mb-8 md:mb-0 lg:flex lg:flex-col gap-2 justify-center">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold">
            Hi, Name 👋 Welcome to Hintro
          </h1>
          <p className="text-sm lg:text-base">
            Ready to make your next call smarter ?
          </p>
        </div>

        <button className="bg-color-base text-white text-sm lg:text-base px-4 py-2 lg:px-14 rounded-md">
          Start Call
        </button>
      </div>

      <div className="gap-3 flex flex-wrap justify-between mb-10">
        <StatCards />
      </div>

      <div className="">
        <h4 className="text-lg font-semibold text-center mb-8">Recent Calls</h4>
        {test ? (
          <CallHistory />
        ) : (
          <EmptyCalls />
        )}
      </div>
    </>
  );
};

export default Home;
