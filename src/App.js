import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import UserCard from "./components/UserCard.js";
import Loader from "react-loader-spinner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: [], loading: false };
  }
  getUsersDetails = () => {
    console.log("inside getUsersDetails");
    this.setState({ loading: true });
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        this.setState({ userData: res.data, loading: false });
      });
  };

  render() {
    const { userData } = this.state;
    return (
      <div class="bg-container">
        <Navbar getNavUsersDetails={this.getUsersDetails} />
        {this.state.loading ? (
          <Loader type="Ball-Triangle" color="#0b69ff" height="50" width="50" />
        ) : (
          userData.map((item) => {
            return <UserCard userCardDetails={item} key={item.id} />;
          })
        )}
      </div>
    );
  }
}

export default App;
