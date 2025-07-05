import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Welcome to our online food delivery service! We are dedicated to
          bringing delicious meals from your favorite local restaurants right to
          your doorstep. Our mission is to make dining convenient and enjoyable
          for everyone.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Whether you're craving pizza, sushi, or a gourmet burger, we've got
          you covered. Our user-friendly platform allows you to browse menus,
          place orders, and track deliveries in real-time.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Thank you for choosing us for your food delivery needs. We look
          forward to serving you!
        </p>

        {/* UserClass component (styled separately if needed) */}
        <UserClass
          name={"Vaishnavi"}
          contact={"9347977431"}
          location={"Warangal"}
          bio={"MBA"}
        />
      </div>
    );
  }
}

export default About;
