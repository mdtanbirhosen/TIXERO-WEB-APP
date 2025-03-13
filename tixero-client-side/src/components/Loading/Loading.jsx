import { motion } from "framer-motion";
import TLogo from "../../assets/T logo.png";

const Loading = () => {
  return (
    <div className=" h-screen w-screen relative overflow-hidden bg-gray-100">
      {/* Logo */}
      <div className="z-10 flex items-center justify-center h-screen">
        <img src={TLogo} alt="Logo" className="w-32 h-32" />
      </div>

      {/* Moving gradient bar */}
      <motion.div
        className="h-screen w-10 bg-gradient-to-r from-transparent via-blue-400 to-blue-700 absolute top-0"
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
