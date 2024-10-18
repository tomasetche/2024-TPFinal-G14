"use client";
import { useEffect, useState } from "react";
import Button from "../components/boton";
import Title from "../components/title";
import CheckBox from "../components/checkbox";
import styles from "./header.module.css"


export default function Header({}) {
    return (
        <>
            <div className={styles.top-bar} >
                <div className={styles.logo}>
                    <img src="logo.png" alt="Logo" />
                </div>
                <div className={styles.search-bar}>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={styles.auth-buttons}>
                    <button className={styles.login}>Login</button>
                    <button className={styles.register}>Register</button>
                </div>
            </div>
            <nav className={styles.nav-bar}>
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
        </>
    );
}
