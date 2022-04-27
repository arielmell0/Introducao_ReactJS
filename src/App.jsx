import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const renderShowHistory = () => (
    <div>
        Clique no botão abaixo para visualizar o histórico dos Clientes 
        <br/>
        {buttonA}
    </div>
)

const renderAddCustomer = () => (
    <div>
        Clique abaixo para cadastrar o cliente
        <br/>
        {buttonB}
    </div>
)

const App = () => {
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            {hasCustomer ? renderShowHistory() : renderAddCustomer()}
        </div>
    )
}

export default App;