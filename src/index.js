import React from "react";
import ReactDom from "react-dom";
import Button from "./Button";
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";
import "./style.css";

function sum(a, b) {
    return alert(a + b)
}

const App = () => {
    return (
        <div className="App">
            Hello World
            <Button onClick={() => sum(10, 20)} name="Ariel Oliveira de Mello"/>

            <ComponenteA>
                <ComponenteB>
                    <Button onClick={() => sum(50, 20)} name="Ariel Oliveira"/>
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDom.render(<App />, rootElement)