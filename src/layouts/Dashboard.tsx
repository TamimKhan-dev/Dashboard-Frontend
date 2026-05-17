import { Outlet } from "react-router";
import SideBar from "../components/SideBar";

const Dashboard = () => {
    return (
        <div className=''>
            <SideBar />
            <div className="flex-1 md:ml-61 lg:ml-72 p-5 md:py-5 md:px-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;