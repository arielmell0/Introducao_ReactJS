import React from 'react'

const ComponenteA = (props) => {
    const { name, onClick } = props

    return (
        <div>
            Componente A =D
            {props.children}
        </div>
    )
}

export default ComponenteA