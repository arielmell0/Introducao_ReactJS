import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Ariel Oliveira de Mello',
        skills: ['React', 'Node', 'CSS', 'WebPack']
    },
    {
        id: 2,
        name: 'Adriana Pereira de Oliveira',
        skills: ['Cobol', 'Golang', 'Insomnia', 'Python']
    },
    {
        id: 3,
        name: 'Silvio Alves de Mello',
        skills: ['Angular', 'Electron', 'Elixir', 'Ruby']
    },
    {
        id: 4,
        name: 'Julia da Silva Schardosim',
        skills: ['Express', 'MongoDB', 'MySQL', 'JWT']
    },
]

const App = () => {
    const renderCustomers = (customer, index) => {
        return (
            <div>
                <li key={`customer-${customer.id}`}>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>      
        )
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{ paddingLeft: '30px' }}  key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <div>
                <ul>{listCustomer.map(renderCustomers)}</ul>
            </div>
        </div>
    )
}

export default App;