import { Menu, X } from "lucide-react";
import { MdMessage, MdOutlineSupport, MdSpaceDashboard } from "react-icons/md";
import { FaChevronDown, FaGift, FaPlay } from "react-icons/fa6";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { useState } from "react";
import { IoDocumentTextSharp } from "react-icons/io5";
import "../index.css";

const SideBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className="">
        <nav className="relative md:z-20 flex items-center justify-between p-3 border-b border-neutral-200">
          {/* Left Side */}
          <div className="flex justify-between md:justify-start md:gap-50 lg:gap-66 items-center w-1/2">
            {/* Mobile Menu */}
            <button onClick={handleToggle} className="md:hidden">
              <Menu />
            </button>

            {/* Desktop Logo */}
            <h2 className="hidden md:block text-xl font-semibold md:translate-x-16 lg:text-2xl">
              Hintro
            </h2>

            {/* Dashboard Title */}
            <h3 className="font-semibold translate-x-10 md:translate-0 lg:text-2xl">
              Dashboard
            </h3>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-5 w-1/2 justify-end">
            <button className="px-3 py-2 lg:px-4 lg:py-2 text-xs lg:text-base rounded bg-transparent border-2 border-black text-black hidden md:flex md:items-center md:gap-4">
              <FaPlay /> Watch Tutorial
            </button>

            <div className="w-9 h-9 rounded-full bg-neutral-300"></div>

            <button className="hidden md:block cursor-pointer">
              <FaChevronDown />
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {!isActive && (
        <div
          onClick={handleToggle}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
        ></div>
      )}

      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-sidebar w-60 lg:min-w-72 space-y-6 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out md:border-r-2 border-base`}
      >
        <div className="ml-3 min-h-9">
          <button onClick={handleToggle} className="md:hidden">
            <X size={30} />
          </button>
        </div>

        <div className="flex-1 px-7 md:space-y-2 border-b-2 border-base text-sidebar mt-3">
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out"
          >
            <MdSpaceDashboard />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out"
          >
            <IoIosCall />
            <span>Call Insights</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out"
          >
            <IoDocumentTextSharp />
            <span>Knowledge Base</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out"
          >
            <MdMessage />
            <span>Prompts</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out"
          >
            <MdOutlineSupport />
            <span>Boxy Controls</span>
          </a>
        </div>

        <div className="h-1/3 w-full px-7 space-y-2">
          <a href="#" className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out">
            <HiMiniInboxArrowDown />
            <span>Feedback History</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-[#edf0ff] hover:text-[#6686ff] py-2 px-3 rounded-lg transition duration-150 ease-in-out">
            <FaGift />
            <span>Feedback</span>
          </a>

          <button className="block px-9 py-2 bg-upgrade mx-auto rounded-xl text-white cursor-pointer">
            Upagrade
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
