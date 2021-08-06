import React from "react";
import axios from "axios";

export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }
  handleSubmit(event) {
    axios
    .post(`http://localhost:3000/api/chats`, {
      description: this.state.description
    })
    .then((response) => {
      console.log(response.data.chat._id);
      localStorage.setItem("_id", response.data.chat._id);
    })
    .catch((err) => {
      alert(err);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div id="form-chat">
        <textarea
          className="chat-input"
          placeholder="Write your chat tes"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
      </div>

      <button
        id="btn-post"
        className="w-5 btn btn-lg btn-primary"
        type="submit"
        value="post"
      >
        Post
      </button>
    </form>
    );
  }
}
