import logo from "../../assets/logoImg.png"
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className=" bg-white rounded-lg p-3 md:p-5 ">
            <div className="flex lg:items-center justify-between flex-col lg:flex-row gap-5">
                {/* company description section */}
                <div className="w-full md:w-1/2 lg:w-1/3">
                    <img src={logo} className="max-w-[200px]" alt="" />
                    <p className="text-justify text-secondary-color">Tixero.com is a premium online booking portal which allows you to purchase ticket for various bus, launch, airline & hotel room booking services both Internationally & locally across the country.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold">Company Info</h3>
                    <ul className="*:link-hover text-secondary-color w-fit">
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                        <li>Privacy Notice</li>
                        <li>Cancellation Policy</li>
                        <li>How To Buy Ticket</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold">About Tixero</h3>
                    <ul className="*:link-hover text-secondary-color w-fit">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Services</li>
                    </ul>
                    <div className="flex items-center justify-baseline gap-3 mt-3">
                        <div className="p-3 bg-gray-300 rounded-full">
                            <FaFacebookF />
                        </div>
                        <div className="p-3 bg-gray-300 rounded-full">
                            <FaXTwitter />
                        </div>
                        <div className="p-3 bg-gray-300 rounded-full">
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;