import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.js"; // OR import Header from "./components/Header.js"
import BodyComp from "./src/components/BodyComp.js";


// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;


//* Note: When you have to dynamically pass in a data to a component, you pass in prop


//not using keys (not acceptable)   <<<<<<<<<<<<  index as key (use as a last resort) <<<<<<<<<<<< unique id (best practice and laways preffered)




const AppComponent = () => {
    return (
        <div className="App">
            <Header />
            <BodyComp />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);