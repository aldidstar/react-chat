import axios from "axios";
import React from "react";

export default class ChatItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/api/chats`, {})
      .then((response) => {
       
          this.setState({ description: response.data[0].description });
     
        localStorage.getItem("token");
        localStorage.getItem("email");
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div className="container-item">
        <h4>{this.state.description}</h4>
      </div>
    );
  }
}
