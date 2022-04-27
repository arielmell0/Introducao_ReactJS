import React from "react";

const App = () => {
    const showEvent = (e) => {
        console.log('Evento clickado')
        console.log(e)
    }

    const Button = <button onClick={showEvent}>Mostrar evento</button>
    
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {Button}
        </div>
    )
}

export default App;