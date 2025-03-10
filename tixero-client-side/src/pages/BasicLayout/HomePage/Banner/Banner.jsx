import Destination from "./Destination";
import bannerImg from "../../../../assets/banner.png"
const Banner = () => {
    return (
        <div className="relative ">
            <img src={bannerImg} alt="" className="w-full h-[500px] md:h-auto object-cover rounded-2xl"  />
            <div className="absolute  w-full inset-0 flex items-center justify-center">
                <Destination />
            </div>
        </div>

    );
};

export default Banner;