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

export default function home(){

    return(<>
    <Header></Header>
    <Publicacion precio ="430.000" productName="Bicicleta" imageUrl="https://acdn.mitiendanube.com/stores/002/522/532/products/shiftlateral1-e8780b88064bc303bf16771490269917-1024-1024.webp" ></Publicacion>
    <Publicacion precio ="40.000" productName="Pelota" imageUrl="https://www.deportesonce.com.ar/wp-content/uploads/virtuemart/product/championship-29.jpg"></Publicacion>
    <Publicacion precio ="430.000" productName="Camperon bien turro" imageUrl="https://assets.christiandior.com/is/image/diorprod/147C21A2968X5803_E01?$default_GHC_1280$&crop=409,97,1225,1673&bfc=on&qlt=85"></Publicacion>

    </>)
}