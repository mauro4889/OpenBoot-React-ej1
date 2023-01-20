import React from 'react'
import { Contact } from '../../models/contact.class'
import { ComponenteB } from '../ComponenteB/ComponenteB'

export const ComponenteA = () => {
    const defaultContact = new Contact('Mauro', 'Spinello', 'mauro4889@gmail.com', false)

    return (
        <div>
            <h2>CONTACTO</h2>
            <ComponenteB contact={defaultContact} />
        </div>
    )
}
