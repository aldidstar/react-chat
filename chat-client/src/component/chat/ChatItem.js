import axios from "axios";
import React from "react";

export default class ChatItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: [] };
    this.deletedChat = this.deletedChat.bind(this);
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

  deletedChat() {
    axios
      .delete(
        `http://localhost:3000/api/chats/${localStorage.getItem("_id")};`,
        {}
      )
      .then((response) => {
        console.log(response);
        // this.setState({ description: '' });

        // localStorage.getItem("token");
        // localStorage.getItem("email");
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      
        <div>
          <div id="container-item">
            <p>{this.state.description}</p>
          </div>
          <button onClick={this.deletedChat} id="btn-cancel" type="submit" className="btn btn-warning">
            <i className="fas fa-minus"></i>
          </button>
        </div>
    
    );
  }
}
