"use client"
import styles from "./buscador.module.css" ;

const Buscador = ({}) => {
    return(
        <input className={styles.input} type="text" placeholder="Buscar nombre: " id ="buscador" />
    )
}

export default Buscador;
