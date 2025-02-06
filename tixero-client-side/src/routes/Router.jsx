import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BasicLayout from "../Layouts/BasicLayout/BasicLayout";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Home from "../pages/BasicLayout/HomePage/Home/Home";
import AboutUs from "../pages/BasicLayout/AboutUsPage/AboutUs/AboutUs";
import Cancellation from "../pages/BasicLayout/CancellationPage/Cancellation/Cancellation";
import Feedback from "../pages/BasicLayout/FeedbackPage/Feedback/Feedback";
import ManageBooking from "../pages/BasicLayout/ManageBookingPage/ManageBooking/ManageBooking";
import ContactUs from "../pages/BasicLayout/ContactUsPage/ContactUs/ContactUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/',
            element:<BasicLayout></BasicLayout>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/about-us",
                    element: <AboutUs></AboutUs>

                },
                {
                    path: '/Cancellation',
                    element: <Cancellation></Cancellation>
                },
                {
                    path: '/Feedback',
                    element: <Feedback></Feedback>
                },
                {
                    path:'/manage-booking',
                    element:<ManageBooking></ManageBooking>
                },
                {
                    path:'/contact-us',
                    element: <ContactUs></ContactUs>
                },
            ]
        },
        {
            path:"/dashboard",
            element: <Dashboard></Dashboard>
        }
      ]
    },
  ]);

export default router;