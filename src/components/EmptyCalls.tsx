import { IoCalendarClearOutline } from "react-icons/io5";
import "./../index.css";

const EmptyCalls = () => {
  return (
    <div className="md:border-2 border-base p-5 rounded-lg flex flex-col gap-3 items-center justify-center lg:w-2/3 mx-auto">
      <div className="p-4 text-xl bg-[#edf0ff] text-[#6686ff] rounded-xl">
        <IoCalendarClearOutline />
      </div>

      <h5 className="font-semibold">No Recent Calls</h5>
      <p className="text-sm text-[#000000]/50 text-center sm:w-97">
        Connect your Google Calendar to see upcoming meetings, get reminders,
        and join calls directly from Hintro.
      </p>

      <button className="border rounded-lg px-6 py-2 cursor-pointer">
        Start a Call
      </button>
    </div>
  );
};

export default EmptyCalls;
