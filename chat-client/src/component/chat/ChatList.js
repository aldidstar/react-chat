import React from "react";
import ChatItem from "./ChatItem";

export default class ChatList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const nodeList = this.props.data.map((item) => {
      return (
        <ChatItem
          description={item.description}
          key={item.id}
          id={item.id}
          remove={this.props.deletedChat}
        />
      );
    });
    return <div>{nodeList}</div>;
  }
}
