import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0
    };
  }

  render() {
    const { name, location, contact, email } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>User Profile class component</h1>
        <h2>
          Count: {count}
        </h2>

        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        />

        <h2>
          Count2: {count2}
        </h2>
        <button
          onClick={() => {
            this.setState({ count2: count2 + 1 });
          }}
        />
        <h2>
          Name: {name}
        </h2>
        <h3>
          Location: {location}
        </h3>
        <h4>
          Contact: {contact}
        </h4>
        <h4>
          Email: {email}
        </h4>
      </div>
    );
  }
}

export default UserClass;
