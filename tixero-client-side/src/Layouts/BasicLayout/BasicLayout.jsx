import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const BasicLayout = () => {
    return (
        <div className="bg-[#E3E3E3]">
            <Navbar></Navbar>


            <main className="px-2 max-w-7xl mx-auto min-h-screen">
                <Outlet></Outlet>
            </main>


            <Footer></Footer>
        </div>
    );
};

export default BasicLayout;