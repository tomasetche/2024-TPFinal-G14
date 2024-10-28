"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import styles from "./header.module.css"


export default function Header(props) {

    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState("");

    async function getNameHeader(){

        const data = {
            userId: userId,
        }

        const response = await fetch('http://localhost:4000/getUserHeader',{
            method:"POST",
         headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data),
        })

                 
        var respuesta = await response.json();
        console.log(respuesta)
        setUsername(respuesta.nombre)
        localStorage.setItem("userName", respuesta.nombre)
      
            

    }

    useEffect(() => {
        manejarUseridHome();
        getNameHeader();
        
    },[])

    function manejarUseridHome() {
        setUserId(localStorage.getItem("userId"))
        // obtener de la URL no de localstorage
    }

    function redirigirLogin(){
        location.href = "/loginPage"
    }

    function redirigirSingin(){
        location.href = "/singinPage"
    }
    
    function redirigirLogout() {
        localStorage.setItem("userId", 0)
        location.href = "/home"
    }

    return (
        < >
         <header className={styles.header1} >
                <div className={styles.topBar} >
                    <div className={styles.logo}>
                    <img src="images/logoCacho.png" className={styles.logoImage} alt="Logo" />
                 </div>
                    <div className={styles.searchBar}>
                     <input type="text" placeholder="Search..." />
                 </div>
                    { 
                    userId == 0 &&
                    <div className={styles.authButtons}>
                        <button className={styles.login} onClick={redirigirLogin} >Login</button>
                        <button className={styles.register} onClick={redirigirSingin} >Register</button>
                    </div>
                    }
                    {
                        userId != 0 &&
                        <div className={styles.authButtons}>
                            <h2>{username}</h2>
                            <button className={styles.login} onClick={redirigirLogout}>Logout</button>
                        </div>                        
                    }
                    
             </div>
             <nav className={styles.navBar}>
                 <button>Mis productos</button>
                    <button>Deportes</button>
                    <button>Electrónicos</button>
                    <button>Hogar</button>
                    <button>Moda</button>
                    <button>Supermercado</button>
                 <button>Herramientas</button>
                    <button>Vehículos</button>
                    <button>Juguetes</button>
                    <button>General</button>
                </nav>
            </header>
        </>
    );
}
