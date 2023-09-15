import axios from 'axios'
import React from 'react'
import ChatInput from './ChatInput'
import ChatNavbar from './ChatNavbar'
import ChatList from './ChatList'
import io from 'socket.io-client'
const socket = io(`${process.env.REACT_APP_SERVER_URL}`)

export default class ChatBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { chat: [] }
    this.addChat = this.addChat.bind(this)
    this.deletedChat = this.deletedChat.bind(this)
    this.loadChat = this.loadChat.bind(this)
    this.resendChat = this.resendChat.bind(this)
  }

  componentDidMount() {
    this.loadChat()

    socket.on('add chat', () => {
      this.loadChat()
    })
    socket.on('remove chat', () => {
      this.loadChat()
    })
  }

  loadChat() {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/api/chats`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
      .then((response) => {
        this.setState({
          chat: response.data.map((item) => {
            item.sent = true
            return item
          })
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  addChat(description, name) {
    const id = Date.now()
    this.setState((state, props) => ({
      chat: [...state.chat, { id, description, name, sent: true }]
    }))

    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/chats`,

        {
          id,
          description,
          name
        },
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then((response) => {
        socket.emit('new message', null)
      })
      .catch((err) => {
        this.setState((state, props) => ({
          chat: state.chat.map((item) => {
            if (item.id === id) {
              item.sent = false
            }
            return item
          })
        }))
      })
  }

  resendChat(name, description) {
    const id = Date.now()
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/api/chats`,

        {
          id,
          name,
          description
        },
        {
          headers: {
            'x-access-token': localStorage.getItem('token')
          }
        }
      )
      .then((response) => {
        socket.emit('new message', null)
        this.loadChat()
      })
      .catch((err) => {
        throw err
      })
  }

  deletedChat(id) {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/api/chats/${id}`, {
        headers: {
          'x-access-token': localStorage.getItem('token')
        }
      })
      .then((response) => {
        socket.emit('delete message', null)
        console.log(response)
        this.setState({
          chat: this.state.chat.filter((item) => item.id !== id)
        })
      })
      .catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <div>
        <ChatNavbar />
        <div className="container-chat">
          <ChatList
            resendChat={this.resendChat}
            deletedChat={this.deletedChat}
            data={this.state.chat}
          />
          <ChatInput addChat={this.addChat} />
          <br></br>
        </div>
      </div>
    )
  }
}
