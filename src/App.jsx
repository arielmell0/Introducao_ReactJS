import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? (
                <div>
                    Clique no botão abaixo para visualizar o histórico dos Clientes 
                    <br/>
                    {buttonA}
                </div>
            ) : (
                <div>
                    Clique abaixo para cadastrar o cliente
                    <br/>
                    {buttonB}
                </div>
            )}
        </div>
    )
}

export default App;