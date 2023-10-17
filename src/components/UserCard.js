import { Component } from "react";
import "./UserCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { userCardDetails } = this.props;
    return (
      <div className="user-card">
        <img src={userCardDetails.avatar} alt="avatar" />
        <p>
          <span className="email"> Email: </span> {userCardDetails.email}
        </p>
        <p>
          <span className="first-name"> FirstName: </span>
          {userCardDetails.first_name}
        </p>
        <p>
          <span className="last-name"> LastName: </span>
          {userCardDetails.last_name}
        </p>
      </div>
    );
  }
}

export default UserCard;
