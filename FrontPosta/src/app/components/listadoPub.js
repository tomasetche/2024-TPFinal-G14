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
            publics.map((public) =>
              <Publicacion> imageUrl={public.id} productName={public.nombrePub} precio={public.precio}</Publicacion>
            )
          }
        </ul>
      );
    }
  }
    
    export default ListadoPublics;