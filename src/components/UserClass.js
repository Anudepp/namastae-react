import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // pass the dummy data before the API call
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Unknown",
        bio: "No bio available"
      }
    };
    console.log(this.state.userInfo.name + " child  Constructor");
  }

  async componentDidMount() {
    // Simulating an API call
    const data = await fetch("https://api.github.com/users/Anudepp");
    const json = await data.json();
    //console.log(json);

    // Updating the state with the fetched user info

    this.setState({
      userInfo: json
    });

    console.log(this.state.userInfo.name + " child componentDidMount");
  }
  componentDidUpdate() {
    console.log("User information updated:", this.state.userInfo);
  }
  componentWillUnmount() {
    console.log("UserClass component is being removed from the DOM");
  }

  render() {
    console.log(this.props.name + " child  Render");
    const { name, location, bio } = this.state.userInfo || {};
    return (
      <div className="user-card">
        <h1>User Profile</h1>

        <h2>
          Name: {name}
        </h2>
        <h3>
          Location: {location}
        </h3>
        <h3>
          Bio: {bio}
        </h3>
      </div>
    );
  }
}

export default UserClass;
