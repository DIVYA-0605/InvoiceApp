import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductScreen from "../pages/ProductScreen";
import CustomerScreen from "../pages/CustomerScreen";
import AddItemForm from "../forms/ProductForm";
import CustomerForm from "../forms/CustomerForm";
import InvoiceForms from "../forms/InvoiceForms";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductScreen" element={<ProductScreen />} />
      <Route path="/CustomerScreen" element={<CustomerScreen />} />
      <Route path="/AddProductForm" element={<AddItemForm />} />
      <Route path="/CustomerForm" element={<CustomerForm/>} />
      <Route path="/InvoiceForm" element={<InvoiceForms/>} />

    </Routes>
  );
};

export default AppRoutes;
