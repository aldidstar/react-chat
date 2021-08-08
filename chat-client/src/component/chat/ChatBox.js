import axios from "axios";
import React from "react";
import ChatInput from "./ChatInput";
import ChatNavbar from "./ChatNavbar";
import ChatList from "./ChatList";
// import io from 'socket.io-client';




export default class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chat: []};
    this.addChat = this.addChat.bind(this);
    this.deletedChat = this.deletedChat.bind(this);

  }

  componentDidMount() {
    
    axios
      .get(`http://localhost:3000/api/chats`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.setState({chat: response.data});
        // const socket = io.connect('http://localhost:3000')
        // io.on('connection', (socket) => {
        //   let addedUser = false;
        
        //   // when the client emits 'new message', this listens and executes
        //   socket.on('new message', (data) => {
        //     // we tell the client to execute 'new message'
        //     socket.broadcast.emit('new message', {
        //       username: socket.username,
        //       message: response
        //     });
        //   });
        // });

        // localStorage.getItem("token");
        // localStorage.getItem("email");
      })
      .catch((err) => {
        alert(err);
      });
  }

  addChat(description) {
    const id = Date.now()
    this.setState({chat: [...this.state.chat, {id, description}]})
    axios
    .post(`http://localhost:3000/api/chats`, {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      id, description
    })
    .then((response) => {
      console.log(response);
    
    })
    .catch((err) => {
      alert(err);
    });
   
  }

  deletedChat(id) {
    axios
      .delete(
        `http://localhost:3000/api/chats/${id}`,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        console.log(response);
       this.setState({chat: this.state.chat.filter(item => item.id !== id)})
      })
      .catch((err) => {
        alert(err);
      });
  }

  // userEmail() {
  //   axios
  //     .get(
  //       `http://localhost:3000/api/users;`,{
  //         headers: {
  //           "x-access-token": localStorage.getItem("token"),
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       // console.log(response);
  //       // this.setState({ description: '' });
  //       // localStorage.getItem("token");
  //       // localStorage.getItem("email");
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  render() {
    return (
      <div>
        <ChatNavbar />
        <div className="container-chat">
        <ChatList deletedChat={this.deletedChat} data={this.state.chat} />
          <ChatInput addChat={this.addChat} />
          
          <br></br>
        </div>
      </div>
    );
  }
}

