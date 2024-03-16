import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React JS</span> //JSX => React element
const Content = () => (         //Function React Component
    <h2 className = "para">This is a React Functional component</h2>
)
const title = (               //React Element
    <h1 tabIndex = "5" className = "title">
        {elem}
        Namaste react Using JSX
        </h1>
);
const container = (
    <div id = "container">
        {title}
        {Content()}
        <Content></Content>
        <Content/>
    </div>
)
const HeadingComponent = function() { 
    return(
        <div>
            {container}
        </div>
    
)};
const root= ReactDOM.createRoot(document.getElementById("root")); //for displaying it on the browser
root.render(<HeadingComponent/>); 
