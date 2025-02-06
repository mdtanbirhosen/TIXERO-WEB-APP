import Navbar from "../../../../components/Navbar/Navbar";
import Info from "./info";
import bannerImg from '../../../../assets/banner.jpg'
import Destination from "./Destination";

const Banner = () => {
    return (
        <div className=" bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="w-full h-full bg-gradient-to-r from-[#7f18919e] to-[#0a5db07e] p-2">
                <Info></Info>
                <div className="border-dashed border-b"></div>
                <Navbar></Navbar>
                {/* banner content */}
                <div className="grid md:grid-cols-2">
                    <div></div>
                    <div className="">
                        <h1 className="md:text-6xl text-4xl lg:text-7xl font-semibold italic">Wish you a happy and comfortable journey</h1>
                    </div>
                </div>
                {/* banner bus booking  destination*/}
                <div>
                    <Destination></Destination>
                </div>
            </div>
        </div>
    );
};

export default Banner;