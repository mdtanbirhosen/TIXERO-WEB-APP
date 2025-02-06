import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneAndroid } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Info = () => {
    return (
        <div className="flex justify-between  pb-2  max-w-7xl mx-auto">
            <div className="flex gap-2">
                {/* Phone number */}
                <div className="flex items-center gap-1">
                    <MdPhoneAndroid></MdPhoneAndroid>
                    <p>+8801234567890</p>
                </div>
                {/* Email */}
                <div className="flex items-center gap-1">
                    <HiOutlineMail></HiOutlineMail>
                    <p>tixero@info.com</p>
                </div>

            </div>
            <div className="flex items-center ">
                <div className="flex  items-center gap-0.5">
                    <FaUser></FaUser> Agent Login
                    </div>
                    /
                    <div>Registration</div>
            </div>
        </div>
    );
};

export default Info;