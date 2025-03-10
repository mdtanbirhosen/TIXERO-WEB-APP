import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="text-xs md:text-sm lg:text-base">
      <Outlet></Outlet>
    </div>
  )
}

export default App
