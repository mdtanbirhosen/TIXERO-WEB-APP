import { IoMdCall } from "react-icons/io";
const Info = () => {
  return (
    <div className="flex px-3 bg-primary-color text-white font-bold rounded-md text-xs">
      <div className="border-r flex items-center justify-center pr-3">
        <IoMdCall className="text-2xl "></IoMdCall>
      </div>
      <div className="pl-3 py-1">
        <div className="border-b border-white">Call 121212</div>
        <div>010000000000</div>
      </div>
    </div>
  );
};

export default Info;
