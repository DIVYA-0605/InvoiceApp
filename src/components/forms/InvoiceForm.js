import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function InvoiceForm() {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = (e) => {
      e.preventDefault();
  
      navigate("/"); // Use navigate function to redirect
    };
    const today = new Date().toISOString().split("T")[0];
    const [issuedOn, setIssuedOn] = useState(today);
    const [dueOn, setDueOn] = useState(today);
  
    const handleIssuedOnChange = (event) => {
      if (event.target.value >= today) {
        setIssuedOn(event.target.value);
      }
    };
    const handleDueOnChange = (event) => {
      if (event.target.value >= today) {
        setDueOn(event.target.value);
      }
    };
    // Call the function to enable future dates
    // enableFutureDates();
    const [items, setItems] = useState([
      { item: "", unitPrice: "", quantity: "", total: "" },
    ]);
  
    const handleItemChange = (index, field, value) => {
      const newItems = [...items];
      newItems[index][field] = value;
      setItems(newItems);
    };
  
    const handleDeleteItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    };
  return (
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Invoice
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
             
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form action="#" onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bill From
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Select an option</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bill To
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Select an option</option>
                      <option value="TV">TV/Monitors</option>
                      <option value="PC">PC</option>
                      <option value="GA">Gaming/Console</option>
                      <option value="PH">Phones</option>
                    </select>
                  </div>
                  <div>
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      name="brand"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="brand"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bill Title
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="issuedOn"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Issued On
                    </label>
                    <input
                      type="date"
                      name="issuedOn"
                      id="issuedOn"
                      min={today}
                      value={issuedOn}
                      onChange={handleIssuedOnChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="issuedOn"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Due On
                    </label>
                    <input
                      type="date"
                      name="issuedOn"
                      id="issuedOn"
                      min={today}
                      value={dueOn}
                      onChange={handleDueOnChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required=""
                    />
                  </div>
                </div>

                {/* Invoice Table */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Invoice Items
                  </h3>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left font-semibold">Item</th>
                        <th className="p-2 text-left font-semibold">
                          Description
                        </th>
                        <th className="p-2 text-right font-semibold">
                          Unit Price
                        </th>
                        <th className="p-2 text-right font-semibold">
                          Quantity
                        </th>
                        <th className="p-2 text-right font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Render invoice items with input fields */}
                      {items.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2">
                            <input
                              type="text"
                              value={item.item}
                              onChange={(e) =>
                                handleItemChange(index, "item", e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </td>
                          <td className="p-2">
                            <input
                              type="text"
                              value={item.description}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </td>
                          <td className="p-2 text-right">
                            <input
                              type="number"
                              value={item.unitPrice}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "unitPrice",
                                  e.target.value
                                )
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </td>
                          <td className="p-2 text-right">
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) =>
                                handleItemChange(
                                  index,
                                  "quantity",
                                  e.target.value
                                )
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </td>
                          <td className="p-2 text-right">
                            <input
                              type="text"
                              value={item.total}
                              onChange={(e) =>
                                handleItemChange(index, "total", e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            />
                          </td>
                          <td className="p-2">
                            {/* Delete button with cross icon */}
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={() => handleDeleteItem(index)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    className="mt-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
                    onClick={() =>
                      setItems([
                        ...items,
                        {
                          item: "",
                          description: "",
                          unitPrice: "",
                          quantity: "",
                          total: "",
                        },
                      ])
                    }
                  >
                    Add Item
                  </button>
                </div>
                <div className="sm:col-span-2 mb-4">
                  <label
                    for="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Notes
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-[#8000FF] hover:bg-[#8000FF] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="mr-1 -ml-1 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Create New Invoice
                </button>
              </form>
            </div>
          </div>
  )
}

export default InvoiceForm