import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../Firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className='chats'>
       <div className="userChat">
        <img src="https://images.pexels.com/photos/18091535/pexels-photo-18091535/free-photo-of-a-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userCharInfo">
          <span>Hanima</span>
        </div>
       </div>
       <div className="userChat">
        <img src="https://images.pexels.com/photos/10109143/pexels-photo-10109143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userCharInfo">
          <span>Sanchita</span>
        </div>
       </div>
       <div className="userChat">
        <img src="https://images.pexels.com/photos/17515134/pexels-photo-17515134/free-photo-of-hand-holding-white-flower.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userCharInfo">
          <span>Sreerag</span>
        </div>
       </div>
    </div>
  )
}

export default Chats
