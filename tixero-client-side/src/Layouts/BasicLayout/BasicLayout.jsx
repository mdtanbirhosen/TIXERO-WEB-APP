import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const BasicLayout = () => {
    return (
        <div className="bg-[#E3E3E3] p-2 pb-10 c">
            <div className="container mx-auto relative">
                
                    <Navbar></Navbar>
                

                <main className=" mx-auto min-h-[calc(100vh-312px)] py-10">
                    <Outlet></Outlet>
                </main>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default BasicLayout;