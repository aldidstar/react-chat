// import axios from "axios";
import React from "react";
import ChatInput from "./ChatInput";
import ChatNavbar from "./ChatNavbar";
import ChatItem from "./ChatItem";

// import { Link } from "react-router-dom";

// export default class ChatBox extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { email: "", password: "" };
//   }

//   componentDidMount() {}

//   render() {
//     return (
//       <form>
//         <ChatNavbar />
//         <div className="container-chat">
//         <ChatItem />
//           <ChatInput />
//           <br></br>
//         </div>
//       </form>
//     );
//   }
// }

export default function ChatBox() {
  return (
<div>
    <ChatNavbar />
    <div className="container-chat">
    <ChatItem />
      <ChatInput />
      <br></br>
    </div>
    </div>
  )
}
