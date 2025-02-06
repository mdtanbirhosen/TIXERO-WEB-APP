import {  NavLink } from "react-router-dom";
// import logoImg from "../../assets/logoImg.jpg"
const Navbar = () => {
    const links = <>
        <li ><NavLink className="px-3 py-0.5" to={'/'}>Home</NavLink></li>
        <li ><NavLink className="px-3 py-0.5" to={'/about-us'}>About Us</NavLink></li>
        <li ><NavLink className="px-3 py-0.5" to={'/cancellation'}>Cancellation</NavLink></li>
        <li ><NavLink className="px-3 py-0.5" to={'/feedback'}>Feedback</NavLink></li>
        <li ><NavLink className="px-3 py-0.5" to={'manage-booking'}>Manage Booking</NavLink></li>
        <li ><NavLink className="px-3 py-0.5" to={'/contact-us'}>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar p-0 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className=" text-2xl font-bold">Tixero
                    {/* <img src="Tixero" className=" h-10" alt="" /> */}
                </a>
            </div>
            
            <div className="navbar-end ">
            <div className="navbar-center hidden lg:flex">
                <ul className="  menu-horizontal px-1">
                    {links}

                </ul>
            </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;