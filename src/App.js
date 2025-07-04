import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurentMenu";
import { lazy, Suspense } from "react";

const Groceries = lazy(() => import("./components/Groceries")); // Lazy load Groceries component

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/groceries"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Groceries />
            </Suspense>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
      </Routes>
      <Footer year={2025} companyName="Online Food Delivery" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppLayout />
  </Router>
);
