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
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"; // Import the Redux store
import Cart from "./components/Cart"; // Import Cart component

const Groceries = lazy(() => import("./components/Groceries")); // Lazy load Groceries component

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Simulate fetching user data
    const data = { name: "Anudeep Debbata" };
    setUserName(data.name);
  }, []);
  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName }}>
          {/* Provide the user context to the entire app */}
          <Header />
        </UserContext.Provider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
          <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
        </Routes>
        <UserContext.Provider value={{ loggedInUser: "vaishanvi " }}>
          <Footer year={2025} companyName="Online Food Delivery" />
        </UserContext.Provider>
      </Provider>
      {/* Wrap the Footer in UserContext.Provider to access loggedInUser */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppLayout />
  </Router>
);
