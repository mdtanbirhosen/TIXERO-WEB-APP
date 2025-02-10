import Navbar from "../../../../components/Navbar/Navbar";
import Info from "./info";
import bannerImg from '../../../../assets/banner.jpg'
import Destination from "./Destination";
import bannerBus from "../../../../assets/bannerBus.png"

const Banner = () => {
    return (
        <div className=" bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="w-full h-full bg-gradient-to-r from-[#7f1891ba] to-[#0a5db0b5] p-2 ">
                <Info></Info>
                <div className="border-dashed border-b"></div>
                <Navbar></Navbar>
                {/* banner content */}
                <div className="flex  items-center justify-between gap-5 max-w-7xl mx-auto w-full my-10">
                    <div className="w-full md:w-1/2">
                        <img src={bannerBus} className="w-full" alt="" />
                    </div>
                    <div className="w-ful md:w-1/2">
                        <h1 className="md:text-6xl text-4xl lg:text-7xl font-semibold italic">Wish you a happy and comfortable journey</h1>
                    </div>
                </div>
                {/* banner bus booking  destination*/}
                <div className="mx-auto max-w-7xl">
                    <Destination></Destination>
                </div>
            </div>
        </div>
    );
};

export default Banner;