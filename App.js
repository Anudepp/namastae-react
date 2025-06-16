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

const RestaurentCard = props => {
  console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-image"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/0435a03f4d2017a0a64d90b279c2fa63.jpg"
        alt="Restaurant"
      />
      <h3 className="res-name">
        {props.resname}
      </h3>
      <h4>
        <span className="res-cuisine">
          Cuisine: {props.cusine}
        </span>
      </h4>
      <span className="res-rating">
        Rating : {props.resrating}
      </span>
      <h4 />
      <h4>
        <span className="res-cost">
          Cost per 2 person: {props.rescost}
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
          resname="Meghana"
          cusine={["Indian", "Biryani"]}
          resrating="4.5"
          rescost="20"
        />
        <RestaurentCard
          resname="Another Restaurant"
          cusine={["Italian", "Pizza"]}
          resrating="4.0"
          rescost="25"
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
