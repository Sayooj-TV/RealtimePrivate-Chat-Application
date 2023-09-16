import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = () => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/18091535/pexels-photo-18091535/free-photo-of-a-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <img src="https://images.pexels.com/photos/17515134/pexels-photo-17515134/free-photo-of-hand-holding-white-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <p>hello</p>
      </div>
      
    </div>
  )
}

export default Message
