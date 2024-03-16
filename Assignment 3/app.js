import React from "react";
import ReactDOM from "react-dom/client";


/*
<div id ="root">
<div class="title">
    <h1></h1>
    <h2></h2>
    <h3></h3>
</div>
</div>
*/

//Using React.createElement
/*
const title = React.createElement("div", { class: "title" }, [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag"), React.createElement("h3", {}, "I am an h3 tag")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/

//Using JSX
/*
const title = (<div className = "title">
    <h1>I am an h1 tag</h1>
    <h2>I am an h2 tag</h2>
    <h3>I am an h3 tag</h3>
</div>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
*/

//Using Functional Component
/*
const Title = () => (
    <div className="title">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
        <h3>I am an h3 tag</h3>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);
*/


//`Composition of Component` (Add a component inside another)
/*
const Heading1 = () => (
    <h1>I am an h1 tag</h1>
)
const Heading2 = () => (
    <h2>I am an h2 tag</h2>
)
const Heading3 = () => (
    <h3>I am an h3 tag</h3>
)
const Title = () => (
    <div className="title">
        <Heading1/>
        <Heading2/>
        <Heading3/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);
*/


//Header from Scratch using Functional Component
const Header = () => (
    <div className="header">
        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600" alt = "Logo" id ="logo"></img>
        <div class = "search-bar">
        <input type="text" placeholder="Search..."></input>
        <button>Search</button>
        </div>
        <div className="profile">Profile</div>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);