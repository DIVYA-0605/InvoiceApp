import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const tableHead = [
  "#",
  "INVOICE ID",
  "BUSINESS NAME",
  "$ AMOUNT",
  "DUE DATE",
  "STATUS",
  "PAYMENT STATUS",
  "ACTION",
  "",
];
const tableRow = [
  {
    no: "1",
    invoiceId: "#12995",
    status: "unsent",
    paymentStatus: "unpaid",
    dueDate: "08/17/2023",
    customer: "John Duo",
    amountDue: "$0",
  },
  {
    no: "2",
    invoiceId: "#12996",
    status: "unsent",
    paymentStatus: "unpaid",
    dueDate: "08/14/2023",
    customer: "Mahesh",
    amountDue: "$791.77",
  },
  {
    no: "3",
    invoiceId: "#12345",
    paymentStatus: "partially paid",
    status: "sent",
    dueDate: "08/12/2023",
    customer: "Divya",
    amountDue: "$79.77",
  },
  {
    no: "4",
    invoiceId: "#12842",
    status: "sent",
    paymentStatus: "partially paid",
    dueDate: "08/10/2023",
    customer: "Yagna",
    amountDue: "$0",
  },
  {
    no: "5",
    invoiceId: "#12345",
    status: "sent",
    paymentStatus: "partially paid",
    dueDate: "08/12/2023",
    customer: "Divya",
    amountDue: "$179.77",
  },
  {
    no: "6",
    invoiceId: "#12842",
    status: "unsent",
    paymentStatus: "unpaid",
    dueDate: "08/10/2023",
    customer: "Yagna",
    amountDue: "$1700",
  },
  {
    no: "7",
    invoiceId: "#12345",
    status: "sent",
    paymentStatus: "unpaid",
    dueDate: "08/12/2023",
    customer: "John",
    amountDue: "$9.77",
  },
];

function getStatusColor(status) {
  switch (status) {
    case "sent":
      return "bg-[#EBF8F1] text-[#449271] text-[12px] py-[5px] px-[10px] rounded-md uppercase font-bold"; // Light background, dark text
    case "unsent":
      return "bg-[#FFE6EF] text-[#972B4F] text-[12px] py-[5px] px-[10px] rounded-md uppercase font-bold"; // Light background, dark text
    default:
      return "";
  }
}

function getPaymentStatus(status) {
  switch (status) {
    case "paid":
      return "bg-[#EBF8F1] text-[#449271] text-[12px] py-[5px] px-[10px] rounded-md uppercase font-bold"; // Light background, dark text
    case "unpaid":
      return "bg-[#FFE6EF] text-[#972B4F] text-[12px] py-[5px] px-[10px] rounded-md uppercase font-bold"; // Light background, dark text
    case "partially paid":
      return "bg-yellow-100 text-yellow-800 text-[12px] py-[5px] px-[10px] rounded-md uppercase font-bold"; // Light background, dark text
    default:
      return "";
  }
}

function Home() {
  const [modalOpen, setModalOpen] = useState(null);
  const modalRef = useRef(null);

  const toggleModal = (rowIndex) => {
    if (modalOpen === rowIndex) {
      setModalOpen(null); // Close the currently open modal
    } else {
      setModalOpen(rowIndex); // Open the clicked modal
    }
  };

  const [invoiceOpen, setInvoiceOpen] = useState(false);
  const toggleInvoice = () => {
    setInvoiceOpen(!invoiceOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(null); // Close the modal when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Call the function to enable future dates
  // enableFutureDates();

  return (
    <div className="bg-white h-full">
      {/* Invoice Table Data */}
      <h1 className=" text-[#081159] text-3xl font-bold mt-10 ml-10 ">
        Billing & invoices
      </h1>
      <p className="ml-10 w-96 text-[#B5BABE] mt-2">
        View all your invoices and receipts and make sure you pay your employees
        on time
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
        <Link to="/InvoiceForm">
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
            New Invoice
          </button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-10 mr-10 mt-4 mb-10">
        <table className="w-full text-sm text-left text-gray-500">
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
                <th
                  scope="row"
                  className="py-3.5 px-8 whitespace-nowrap"
                  key={index}
                >
                  {rows.no}
                </th>
                <td className="py-3.5 px-8">{rows.invoiceId}</td>
                <td className="py-3.5 px-8 ">{rows.customer}</td>
                <td className="py-3.5 px-9">
                  {rows.amountDue === "$0" ? (
                    <span className="inline-flex h-30px px-[10px] cursor-not-allowed text-[12px] py-[5px] items-center gap-10px flex-shrink-0 rounded-md opacity-80 bg-gray-300 text-gray-500 shadow-btn-shadow">
                      No Due
                    </span>
                  ) : (
                    rows.amountDue
                  )}
                </td>
                <td className="py-3.5 px-8">{rows.dueDate}</td>
                <td className="py-3.5 px-8">
                  <span
                    className={`px-2 py-1 rounded ${getStatusColor(
                      rows.status
                    )}`}
                  >
                    {rows.status}
                  </span>
                </td>
                <td className="py-3.5 px-8">
                  <span
                    className={`px-2 py-1 rounded ${getPaymentStatus(
                      rows.paymentStatus
                    )}`}
                  >
                    {rows.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3 flex items-center justify-end relative">
                  <button
                    onClick={() => toggleModal(index)}
                    className="items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                  >
                    <svg
                      className="w-5 h-5 mr-11"
                      aria-hidden="true"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>

                  {modalOpen === index && (
                    <div
                      ref={modalRef}
                      className="absolute top-10 -right-8 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={toggleInvoice}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 ml-6"
                            >
                              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                              <path
                                fillRule="evenodd"
                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <p  className="block py-2 px-4 text-[15px]">
                              View
                            </p>
                          </div>
                        </li>
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={() => toggleModal(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 ml-6"
                            >
                              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <p  className="block py-2 px-4 text-[15px]">
                              Payment
                            </p>
                          </div>
                        </li>
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={() => toggleModal(index)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 ml-6"
                            >
                              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                            </svg>

                            <p  className="block py-2 px-4 text-[15px]">
                              Send
                            </p>
                          </div>
                        </li>
                        <li>
                          <div
                            className="hover:bg-gray-100 flex items-center"
                            onClick={() => toggleModal(index)}
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

                            <p class="block py-2 px-4 text-[15px]">
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

export default Home;
