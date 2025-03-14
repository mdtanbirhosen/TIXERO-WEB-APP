import { motion } from "framer-motion";
import TLogo from "../../assets/T logo.png";

const Loading = () => {
  return (
    <div className=" h-screen w-screen relative overflow-hidden bg-[#E3E3E3] -z-50">
      {/* Logo */}
      <div className="z-50 flex items-center justify-center h-screen ">
        <img src={TLogo} alt="Logo" className="" />
      </div>

      {/* Moving gradient bar */}
      <motion.div
        className="h-screen w-100 bg-gradient-to-r from-transparent via-red-400 to-red-500 absolute top-0 -z-10"
        initial={{ x: "-100%" }} // Start off-screen left
        animate={{ x: "100vw" }} // Move to the right end
        transition={{
          duration: 2,  // Animation duration
          repeat: Infinity, // Repeat infinitely
          ease: "linear" // Smooth linear motion
        }}
      />
    </div>
  );
};

export default Loading;
