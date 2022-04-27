import React from "react";

const ButtonA = <button>Histórico dos Clientes</button>

const ButtonB = <button>Segundo Botão</button>

const hasCustomer = true

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer && (
                <div>
                    Clique no botão abaixo para visualizar o histórico dos Clientes 
                    <br/>
                    {ButtonA}
                </div>
            )}
        </div>
    )
}

export default App;