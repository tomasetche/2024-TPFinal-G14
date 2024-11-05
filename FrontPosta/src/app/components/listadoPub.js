"use client"
import Chat from "../components/chat";
import Publicacion from "./publicacion";

const ListadoPublics = ({publics}) => {

    if (publics.length == 0) {
      return
    } else {
      
      return (
        <ul>
          {
            publics.length != 0 && 
            publics.map((publics) =>
              <Publicacion> imageUrl={publics.id} productName={publics.nombrePub} precio={publics.precio}</Publicacion>
            )
          }
        </ul>
      );
    }
  }
    
    export default ListadoPublics;