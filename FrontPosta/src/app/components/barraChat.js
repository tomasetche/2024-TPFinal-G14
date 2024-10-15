"use client"
import styles from "./barraChat.module.css" ;

const BarraChat = ({}) => {
    return(
        <input className={styles.input} type="text" placeholder="Mensaje " id ="barraChat" />
    )
}

export default BarraChat;
