import React from "react";
import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductScreen from "../pages/ProductScreen";
import CustomerScreen from "../pages/CustomerScreen";
import AddItemForm from "../forms/ProductForm";
import CustomerForm from "../forms/CustomerForm";
import InvoiceForms from "../forms/InvoiceForms";
import InvoicesScreen from "../pages/InvoicesScreen";
import OrderScreen from "../pages/OrderScreen";
import PurchasesScreen from "../pages/PurchasesScreen";
import InventoryScreen from "../pages/InventoryScreen";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductScreen" element={<ProductScreen />} />
      <Route path="/CustomerScreen" element={<CustomerScreen />} />
      <Route path="/AddProductForm" element={<AddItemForm />} />
      <Route path="/CustomerForm" element={<CustomerForm/>} />
      <Route path="/InvoiceForm" element={<InvoiceForms/>} />
      <Route path="/InvoiceScreen" element={<InvoicesScreen/>} />
      <Route path="/OrderScreen" element={<OrderScreen/>} />
      <Route path="/PurchaseScreen" element={<PurchasesScreen/>} />
      <Route path="/InventoryScreen" element={<InventoryScreen/>} />

    </Routes>
  );
};

export default AppRoutes;
