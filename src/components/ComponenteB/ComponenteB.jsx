import React from 'react'



export const ComponenteB = ({contact}) => {
    return (
        <div>
            <h3>Nombre: {contact.name} </h3>
            <h3>Apellido: {contact.lastname} </h3>
            <h3>Email: {contact.email} </h3>
            <h3>Conectado: {contact.conected} </h3>
        </div>
    )
}

