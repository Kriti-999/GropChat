import React from "react";
import MyMessage from "./MyMessages";
import TheirMessage from "./TheirMessages"
import MessageForm from "./MessagesForm"

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;//in props we have all these attributes inside like chats ,activeChat
  //chats show the array of chats,activeChat is the unique id for specific currently active chat,userName is the name of user of specific chat,messages
  //console.log(chats,activeChat,userName,messages) to see what is stored in props

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {//this function loop through all messages array
    const keys = Object.keys(messages);// denote the messages unique id for specific messages

    return keys.map((key, index) => {//by it we traverse the whole keys array
      const message = messages[key];//denotes the message with specific key
      const lastMessageKey = index === 0 ? null : keys[index - 1];// find out the last message id in keys array
      const isMyMessage = userName === message.sender.username;//check wether the sender username is same as userName

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
              //this div states if the message is fine then diplay MyMessage else display 
                        //TheirMessage components
                    }
              
          </div>
          
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if(!chat)return 'Loading.......'

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;