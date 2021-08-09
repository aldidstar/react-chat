import React from "react";
import ChatItem from "./ChatItem";

export default class ChatList extends React.Component {

  render() {
    const nodeList = this.props.data.map((item) => {
      return (
        <ChatItem
          description={item.description}
          name={item.name}
          key={item.id}
          id={item.id}
          remove={this.props.deletedChat}
        />
      );
    });
    return <div>{nodeList}</div>;
  }
}
