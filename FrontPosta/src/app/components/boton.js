"use client"
//Componente FUNCIONAL va en todos los componentes donde haya interaccioin
                  
//PROPS parametros q le pasamos al componente
/*export default function Button (props) {

    return (
        <button onClick={props.onClick}>{props.children}</button>
    );
}*/

export default function Button ({onClick, text, className}) {

    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
}