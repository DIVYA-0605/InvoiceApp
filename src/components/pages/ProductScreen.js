import React, { useState } from "react";
import { Link } from 'react-router-dom';

const tableHead = ["#", "NAME", "BRAND", "PRICE", "CATEGORY", "ACTION"];
const tableRow = [
  {
    no: "1",
    name: "Gaming Mouse",
    brand: "LogiTech",
    price: "$49.99",
    category: "PC",
  },
  {
    no: "2",
    name: "4K Monitor",
    brand: "Acer",
    price: "$399.99",
    category: "TV/Monitors",
  },
  {
    no: "3",
    name: "Gaming Console",
    brand: "Sony",
    price: "$299.99",
    category: "Gaming/Console",
  },
  {
    no: "4",
    name: "Wireless Keyboard",
    brand: "Microsoft",
    price: "$79.99",
    category: "PC",
  },
  {
    no: "5",
    name: "Smartphone",
    brand: "Samsung",
    price: "$699.99",
    category: "Phones",
  },
  {
    no: "6",
    name: "Laptop",
    brand: "HP",
    price: "$849.99",
    category: "PC",
  },
  {
    no: "7",
    name: "Bluetooth Speaker",
    brand: "JBL",
    price: "$89.99",
    category: "Accessories",
  },
];

function ProductScreen() {
  // dropdown
  const [dropOpen, setDropOpen] = useState(null);

  const toggleDrop = (rowIndex) => {
    if (dropOpen === rowIndex) {
      setDropOpen(null); // Close the currently open modal
    } else {
      setDropOpen(rowIndex); // Open the clicked modal
    }
  };
  return (
    <div className="bg-white h-full relative">
      {/* Invoice Table Data */}
      <h1 className=" text-[#081159] text-3xl font-bold mt-10 ml-10">
        ProdigyManager
      </h1>
      <p className="ml-10 w-[400px] text-[#B5BABE] mt-2">
        With a user-friendly interface, you can effortlessly add, organize, and
        manage your products all in one place.
      </p>
      <div className="ml-10 mr-10 mt-11 flex items-center justify-between">
        <div class="w-full md:w-1/2">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                placeholder="Search"
                required=""
              ></input>
            </div>
          </form>
        </div>
        <Link to="/AddProductForm">
        <button
          className="flex items-center justify-center text-white bg-[#8000FF] hover:bg-[#8000FF] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2  focus:outline-none "
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
          Add New Product
        </button>
      </Link>
      
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-10 mr-10 mt-4 mb-10">
        <table className="w-full h-max text-sm text-left text-gray-500">
          <thead className="text-xs text-[#707881] uppercase bg-[#F7F7F7]">
            <tr>
              {tableHead.map((head) => (
                <th scope="col" className="py-3.5 px-8" key={head}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableRow.map((rows, index) => (
              <tr
                className={`bg-white border-b font-semibold text-[#081159] text-[14px]`}
                key={index}
              >
                <th scope="row" className="py-3.5 px-8 whitespace-nowrap">
                  {rows.no}
                </th>
                <td className="py-3.5 px-8">{rows.name}</td>
                <td className="py-3.5 px-8">{rows.brand}</td>
                <td className="py-3.5 px-8">{rows.price}</td>
                <td className="py-3.5 px-8">{rows.category}</td>

                <td className="px-10 py-3 relative">
                  <button
                    onClick={() => toggleDrop(index)}
                    className="inline-flex  items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none "
                    type="button"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>

                  {dropOpen === index && (
                    <div className="absolute top-10 right-5 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
                      <ul
                        className="py-1 text-sm text-gray-700 "
                        aria-labelledby="nikon-d850-dropdown-button"
                      >
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={() => toggleDrop(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 ml-6"
                            >
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>

                            <p  className="block py-2 px-4 text-[15px]">
                              Edit
                            </p>
                          </div>
                        </li>
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={() => toggleDrop(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 ml-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <p  className="block py-2 px-4 text-[15px]">
                              Delete
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductScreen;
