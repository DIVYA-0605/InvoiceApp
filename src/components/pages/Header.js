import React from "react";

import { NavLink, useLocation } from "react-router-dom"; // Import Link from react-router-dom

const menus = [
  { name: "Home", path: "/" },
  {
    name: "Orders",
    path: "/sitesetup",
  },
  {
    name: "Invoices",
    path: "/usersetup",
  },
  {
    name: "Customers",
    path: "/CustomerScreen",
  },
  {
    name: "Products",
    path: "/ProductScreen",
  },
  {
    name: "Inventory",
    path: "/notifications",
  },
  {
    name: "Purchases",
    path: "/billing",
  },
];

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="shadow-lg">
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-10 py-4">
          <NavLink to="/" className="flex items-center">
            {" "}
            {/* Use Link instead of anchor tag */}
            <span className="text-4xl font-bold bg-gradient-to-r from-[#8000FF] to-[#FF0080] text-transparent bg-clip-text">
              InvoEase!!
            </span>
          </NavLink>
          <div className="flex items-center">
            <p
              
              className="text-lg text-blue-600  hover:underline"
            >
              Login
            </p>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 ">
        <div className="max-w-screen-xl  py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-3 text-sm">
              {/* Use Link for navigation */}
              {menus?.map((menu, i) => (
                <NavLink
                  to={menu?.path}
                  key={i}
                  className={`group flex items-center text-center text-sm gap-3.5 font-medium px-5 py-2 hover:bg-[#ddd7f6] bg-customBackground text-customText bg-opacity-20 rounded-full ${
                    isActive(menu.path)
                      ? "bg-[#8000FF] text-indigo-600 rounded-full px-5 py-2  text-center"
                      : ""
                  }`}
                >
                  <h2>{menu?.name}</h2>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
