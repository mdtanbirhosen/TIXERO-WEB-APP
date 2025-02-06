import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../pages/BasicLayout/HomePage/Banner/Banner";

const BasicLayout = () => {
    const {pathname} = useLocation();
    // console.log(pathname)
    return (
        <div>
            {
                pathname === "/" || <Navbar></Navbar>
            }
            {
                pathname === "/" && <Banner></Banner>
            }


            <main className="px-2 max-w-7xl mx-auto">
                <Outlet></Outlet>
            </main>


            <Footer></Footer>
        </div>
    );
};

export default BasicLayout;