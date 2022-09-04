import React from "react";
function MyMessage({message}){
    if (message.attachments && message.attachments.length > 0) {
        // this if statements check whether the message exit ie by message? if it 
        //exist whether it has attachments by message.attachments? if attachments exist if their length >0
      return (
        <img
          src={message.attachments[0].file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
  
    return (
      <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
        {message.text}
      </div>
    );
  };//here float right as my msg is on right side and other person on left
  
  export default MyMessage;