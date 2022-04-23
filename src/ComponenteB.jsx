import React from 'react'

const ComponenteB = (props) => {
    const { name, onClick } = props

    return (
        <div>
            Componente B =D
            {props.children}
        </div>
    )
}

export default ComponenteB