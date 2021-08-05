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
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }
    handleSubmit(event) {
      axios
        .post(`http://localhost:3000/api/chats`, {
         
          description: this.state.description
  
        })
        .then((response) => {
          console.log(response);
          
         
        }) .catch((err) => {
            alert(err);
          });
  
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="form-password"> 
                <textarea
                className="form-control"
                placeholder="Write your chat here"
                  name="description"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              
            </div>
             
            <button
            id="btn-post"
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            value="post"
          >
            Post
          </button>
        </form>
      );
    }
  }