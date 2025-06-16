import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({ resName, cusine, resRating, resCost }) => {
  console.log({ resName, cusine, resRating, resCost });
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
        alt="Restaurant"
      />
      <h3 className="res-name">
        {resName}
      </h3>
      <h4>
        <span className="res-cuisine">
          Cuisine: {cusine}
        </span>
      </h4>
      <span className="res-rating">
        Rating : {resRating}
      </span>
      <h4 />
      <h4>
        <span className="res-cost">
          Cost per 2 person: {resCost}
        </span>
      </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard
          resName="Meghana"
          cusine={["Indian", "Biryani"]}
          resRating="4.5"
          resCost="20"
        />
        <RestaurentCard
          resName="Another Restaurant"
          cusine={["Italian", "Pizza"]}
          resRating="4.0"
          resCost="25"
        />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
