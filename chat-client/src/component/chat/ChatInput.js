import React from "react";


export default class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", name: localStorage.getItem("email") };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) { 
    this.props.addChat(this.state.description)
    this.setState({ description: "", name: localStorage.getItem("email") });
    event.preventDefault();
  }

  render() {
    const user = localStorage.getItem("email");
    console.log(user)
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <div id="form-chat">
        <input id="user-input" readOnly type="text" value={this.state.name} onChange={this.handleChange} name="name" />
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
    </div>
    );
  }
}


