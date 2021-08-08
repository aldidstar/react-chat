import React from "react";
// import io from 'socket.io-client';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./component/login/LoginForm";
import RegisterForm from "./component/register/RegisterForm";
import ChatBox from "./component/chat/ChatBox";
import ChatNavbar from "./component/chat/ChatNavbar";
import ChatInput from "./component/chat/ChatInput";
import ChatList from "./component/chat/ChatList";


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginForm} />
      <Route path="/RegisterForm" component={RegisterForm} />
      <Route path="/ChatBox" component={ChatBox} />
      <Route path="/ChatNavbar" component={ChatNavbar} />
      <Route path="/ChatInput" component={ChatInput} />
      <Route path="/ChatList" component={ChatList} />
    </div>
  </Router>
);

export default App;
