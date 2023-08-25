import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo3 from "../img/logo3.png";
import logo1 from "../img/logo1.png";
import { MdNavigateNext } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";



export default function Sidenav({ children }) {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menus = [
    { name: "Home", path: "/", icon: BiHome, icons: MdNavigateNext },
    {
      name: "Orders",
      path: "/sitesetup",
      icon: AiOutlineSetting,
      icons: MdNavigateNext,
    },
    {
      name: "Invoices",
      path: "/usersetup",
      icon: FiUser,
      icons: MdNavigateNext,
    },
    {
      name: "Customers",
      path: "/CustomerScreen",
      icon: TfiMenuAlt,
      icons: MdNavigateNext,
    },
    {
      name: "Products",
      path: "/ProductScreen",
      icon: BsBoxSeam,
      icons: MdNavigateNext,
    },
    {
      name: "Inventory",
      path: "/notifications",
      icon: FiMail,
      icons: MdNavigateNext,
    },
    {
      name: "Purchases",
      path: "/billing",
      icon: FiShoppingCart,
      icons: MdNavigateNext,
    },
  ];

  return (
    <div className=" flex bg-gray-100">
      <aside
        aria-hidden={open}
        className={`bg-[white] min-h-screen ${
          open ? "w-60" : "w-16"
        } duration-500 text-black-100 px-4`}
      >
        <div className="bg-white h-10 mt-1 mb-2">
          <span className="flex justify-center items-center">
            <img
              src={open ? logo3 : logo1}
              alt="flowina"
              className={`${open ? "w-44" : "w-8"}`}
            />
          </span>
          {open ? <p className="font-bold relative bottom-2 text-right mr-4">Version4.0A</p>: ""}
        </div> 

        <div className="mt-5 flex flex-col gap-3 relative">
          {menus?.map((menu, i) => (
            <NavLink
              to={menu?.path}
              key={i}
              className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-[#ddd7f6] bg-customBackground text-customText bg-opacity-20 rounded-md ${
                isActive(menu.path)
                  ? "bg-[#7a5cf1] text-indigo-600 rounded-10"
                  : ""
              }`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-0 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>

              {open ? (
                <div className="flex w-full justify-end items-center">
                  {React.createElement(menu?.icons, { size: "20" })}
                </div>
              ) : (
                ""
              )}
            </NavLink>
          ))}
        </div>
      </aside>

      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white  border-b border-l h-14 flex items-center justify-start px-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </header>
        {children}
      {/* <Footer open={open}/> */}

      </main>
    </div>
  );
}
