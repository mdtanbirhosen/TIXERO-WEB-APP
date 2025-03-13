import Destination from "./Destination";
import bannerImg from "../../../../assets/banner.png"
const Banner = () => {

    

    return (
        <div className="relative ">
            <img src={bannerImg} alt="" className="w-full min-h-[400px] md:h-full object-cover   rounded-lg" />
            <div className="absolute  w-full inset-0 flex items-center justify-center">
                <Destination />
            </div>
        </div>

    );
};

export default Banner;