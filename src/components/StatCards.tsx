import { BsCalendar3 } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import { HiChartPie } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";
import "./../index.css";

const StatCards = () => {
    return (
        <>
         <div className="border-2 border-base p-3 rounded-md flex gap-2 sm:w-70 sm:h-20 md:w-60 lg:w-62 xl:h-23 xl:py-4 xl:w-89">
          <div className="bg-[#ffe1e1] text-[#e5584e] px-3 py-4 lg:py-3 lg:px-7 lg:text-3xl w-fit rounded-md">
            <HiChartPie />
          </div>
          <div>
            <h5 className="lg:font-semibold">Total Sessions</h5>
            <span className="font-semibold lg:text-xl">0</span>
          </div>
        </div>

        <div className="border-2 border-base p-3 rounded-md flex gap-2 sm:w-70 sm:h-20 md:w-60 lg:w-62 xl:h-23 xl:py-4 xl:w-89">
          <div className="bg-[#e1fcff] text-[#4c9da5] px-3 py-4 lg:py-3 lg:px-7 lg:text-3xl w-fit rounded-md">
            <FaClock />
          </div>
          <div>
            <h5 className="lg:font-semibold">Total Sessions</h5>
            <span className="font-semibold lg:text-xl">0</span>
          </div>
        </div>

        <div className="border-2 border-base p-3 rounded-md flex gap-2 sm:w-70 sm:h-20 md:w-60 lg:w-62 xl:h-23 xl:py-4 xl:w-89">
          <div className="bg-[#e1ffe4] text-[#499955] px-3 py-4 lg:py-3 lg:px-7 lg:text-3xl w-fit rounded-md">
            <HiSparkles />
          </div>
          <div>
            <h5 className="lg:font-semibold">Total Sessions</h5>
            <span className="font-semibold lg:text-xl">0</span>
          </div>
        </div>

        <div className="border-2 border-base p-3 rounded-md flex gap-2 sm:w-70 sm:h-20 md:w-60 lg:w-62 xl:h-23 xl:py-4 xl:w-89">
          <div className="bg-[#ebe1ff] text-[#7b57c2] px-3 py-4 lg:py-3 lg:px-7 lg:text-3xl w-fit rounded-md">
            <BsCalendar3 />
          </div>
          <div>
            <h5 className="lg:font-semibold">Total Sessions</h5>
            <span className="font-semibold lg:text-xl">0</span>
          </div>
        </div>   
        </>
    );
};

export default StatCards;