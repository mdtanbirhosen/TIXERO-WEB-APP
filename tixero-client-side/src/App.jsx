import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loading from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="text-xs md:text-sm lg:text-base">
      {loading ? (
        <Loading/>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
