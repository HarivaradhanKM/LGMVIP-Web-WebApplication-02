import { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { getNavUsersDetails } = this.props;
    return (
      <nav>
        <h1 className="navbar-heading">Chargee Point</h1>
        <p>See our loyal users</p>
        <button className="get-users-button" onClick={getNavUsersDetails}>
          Get Users
        </button>
      </nav>
    );
  }
}

export default Navbar;
