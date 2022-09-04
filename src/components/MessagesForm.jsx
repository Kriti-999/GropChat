import React, { useState } from "react";
import { sendMessage ,isTyping } from "react-chat-engine";
import {SendOutlined,PictureOutlined} from '@ant-design/icons'
function MessagesForm(props){
    const [value,setValue]=useState('');
    const {chatId,creds}=props;
    
    function handleSubmit(event){
        event.preventDefault();//stop the brower from refreshing when submit button is clicked
        const text=value.trim();//remove extra whitespace
        if(text.length>0)sendMessage(creds,chatId,{text});
        setValue('');
    }
    function handleChange(event){
        setValue(event.target.value)
        isTyping(props,chatId);
       
    }
    function handleUpload(event){
sendMessage(creds,chatId,{files: event.target.files,text:''})
    }
    return<div>
<form className="message-form" onSubmit={handleSubmit}>
<input
className="message-input"
placeholder="Send a message"
value={value}
onChange={handleChange}
onSubmit={handleSubmit}/>
<label htmlFor="upload-button">
    <span className="image-button">
        <PictureOutlined className="picture-icon"/>

    </span>
</label>
<input
type="file"
multiple={false}
id="upload-button"
style={{display:'none'}}
onChange={handleUpload}
/>
<button type="submit" className="send-button">
    <SendOutlined className="send-icon"/>
</button>
</form>
    </div>
}
export default MessagesForm;