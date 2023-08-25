import React, { useState } from "react";
import Invoices from "../forms/InvoiceForm";
import InvoiceView from "../forms/CustomerForm";
import Product from "../forms/ProductForm";
import { Link } from "react-router-dom";

const tableHead = [
  "#",
  "Business Name",
  "Business Address",
  "City",
  "Zip Code",
  "Business Phone Number",
  "Business Fax No",
  "Contact Person Name",
  "Email",
  "Phone Number",
  "Action",
];
const tableRow = [
  {
    no: "1",
    businessName: "ABC Electronics",
    businessAddress: "123 Main St",
    city: "New York",
    zipCode: "10001",
    businessPhoneNumber: "(123) 456-7890",
    businessFaxNumber: "(123) 456-7891",
    contactPersonName: "John Doe",
    email: "john@example.com",
    phoneNumber: "(987) 654-3210",
  },
  {
    no: "2",
    businessName: "XYZ Solutions",
    businessAddress: "456 Elm St",
    city: "Los Angeles",
    zipCode: "90001",
    businessPhoneNumber: "(987) 654-3210",
    businessFaxNumber: "(987) 654-3211",
    contactPersonName: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "(123) 456-7890",
  },
  {
    no: "3",
    businessName: "Tech Innovators",
    businessAddress: "789 Oak St",
    city: "San Francisco",
    zipCode: "94101",
    businessPhoneNumber: "(555) 123-4567",
    businessFaxNumber: "(555) 123-4568",
    contactPersonName: "Michael Johnson",
    email: "michael@example.com",
    phoneNumber: "(555) 987-6543",
  },
  {
    no: "4",
    businessName: "Global Imports",
    businessAddress: "567 Pine St",
    city: "Chicago",
    zipCode: "60601",
    businessPhoneNumber: "(777) 111-2222",
    businessFaxNumber: "(777) 111-2223",
    contactPersonName: "Sarah Williams",
    email: "sarah@example.com",
    phoneNumber: "(777) 999-8888",
  },
  {
    no: "5",
    businessName: "Sunrise Foods",
    businessAddress: "234 Maple St",
    city: "Miami",
    zipCode: "33101",
    businessPhoneNumber: "(222) 333-4444",
    businessFaxNumber: "(222) 333-4445",
    contactPersonName: "Robert Brown",
    email: "robert@example.com",
    phoneNumber: "(222) 444-5555",
  },
  {
    no: "6",
    businessName: "Nature's Harvest",
    businessAddress: "876 Cedar St",
    city: "Seattle",
    zipCode: "98101",
    businessPhoneNumber: "(888) 555-6666",
    businessFaxNumber: "(888) 555-6667",
    contactPersonName: "Emily Green",
    email: "emily@example.com",
    phoneNumber: "(888) 777-8888",
  },
];

function CustomerScreen() {
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
    <div className="bg-white h-full relative ">
      {/* Invoice Table Data */}
      <h1 className=" text-[#081159] text-3xl font-bold mt-10 ml-10 ">
        Welcome to{" "}
        <span className="text-4xl font-bold bg-gradient-to-r from-[#8000FF] to-[#FF0080] text-transparent bg-clip-text">
          InvoEase!!
        </span>
      </h1>
      <p className="ml-10 w-[400px] text-[#B5BABE] mt-2">
        "Step into the World of Invoicing Excellence! Your Ultimate Solution for
        Effortless Invoicing.
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
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required=""
              ></input>
            </div>
          </form>
        </div>
        <Link to='/CustomerForm'>
          <button
            className="flex items-center justify-center text-white bg-[#8000FF] hover:bg-[#8000FF] focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
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
                <th scope="col" className="py-3.5 px-8 text-center" key={head}>
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
                <td className="py-3.5 px-8 text-center">{rows.businessName}</td>
                <td className="py-3.5 px-8 text-center">
                  {rows.businessAddress}
                </td>
                <td className="py-3.5 px-8 text-center">{rows.city}</td>
                <td className="py-3.5 px-8 text-center">{rows.zipCode}</td>
                <td className="py-3.5 px-8 text-center">
                  {rows.businessPhoneNumber}
                </td>
                <td className="py-3.5 px-8 text-center">
                  {rows.businessFaxNumber}
                </td>
                <td className="py-3.5 px-8 text-center">
                  {rows.contactPersonName}
                </td>
                <td className="py-3.5 px-8 text-center">{rows.email}</td>
                <td className="py-3.5 px-8 text-center">{rows.phoneNumber}</td>

                <td className="px-10 py-3  relative">
                  <button
                    onClick={() => toggleDrop(index)}
                    className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                    <div className="absolute top-14 right-5 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
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

                            <a href="#" className="block py-2 px-4 text-[15px]">
                              Edit
                            </a>
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

                            <a href="#" className="block py-2 px-4 text-[15px]">
                              Delete
                            </a>
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

export default CustomerScreen;
