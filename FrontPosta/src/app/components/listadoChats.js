"use client"
import Chat from "../components/chat";

const ListadoChats = ({chats}) => {

    if (chats.length == 0) {
      return
    } else {
      
      return (
        <ul>
          {
            chats.length != 0 && 
            chats.map((chat) =>
              <Chat id={chat.id} text={chat.Nombre}></Chat>
            )
          }
        </ul>
      );
    }
  }
    
    export default ListadoChats;