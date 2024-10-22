"use client"
import styles from "./publicacion.module.css"

import React from 'react';

const Publicacion = ({ imageUrl, precio, productName }) => {
  return (
    <div className={styles.cuadro}>
      <img src={imageUrl} alt={productName} className={styles.image} />
      <div className={styles.precio}>{precio}</div>
      <div className={styles.productName}>{productName}</div>
    </div>
  );
};

export default Publicacion;