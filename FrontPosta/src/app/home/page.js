"use client"
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import Login from "../components/login";
import Buscador from "../components/buscador";
import Chat from "../components/chat";
import ListadoChats from "../components/listadoChats";
import styles from "./page.module.css";
import Header from "../components/header";
import Publicacion from "../components/publicacion";
import ListadoPublics from "../components/listadoPub";

export default function home(){

  const [publics, setPublics] = useState([])

  async function fetchProductos(event) {
    var categoria = event.target.name;
    console.log("categoria: ", categoria)
    let url = 'http://localhost:4000/getPublicaciones' + '?userId=' +  localStorage.getItem("userId") + '&categoria=' + categoria;
    console.log("url: ", url)
    const response = await fetch(url,{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const result = await response.json()
    console.log(result)
    localStorage.setItem("publicId", result.id)
    setPublics(result.publics)
  }

    return(<>
    <div className={styles.container}>
        <Header onClick={fetchProductos} />
        <ListadoPublics publics={publics}></ListadoPublics>
        <Publicacion 
          precio="$430.000" 
          productName="Bicicleta" 
          imageUrl="https://acdn.mitiendanube.com/stores/002/522/532/products/shiftlateral1-e8780b88064bc303bf16771490269917-1024-1024.webp" 
        />
      </div>
    </>)
}