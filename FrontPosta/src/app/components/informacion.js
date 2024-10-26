"use client";
import styles from "./informacion.module.css";
import React from 'react';

const Informacion = ({ precio, productName, imageUrl, descripcion }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cuadro}>
        <img src={imageUrl} alt={productName} className={styles.imagen} />
        <div className={styles.detalles}>
          <div className={styles.productName}>{productName}</div>
          <div className={styles.precio}>{precio}</div>
          <button className={styles.botonComprar}>Comprar ahora</button>
        </div>
        <div className={styles.descripcion}>{descripcion}</div> 
      </div>
    </div>
  );
};

export default Informacion;