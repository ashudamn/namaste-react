import React from "react";
import ReactDOM  from "react-dom";

const heading=React.createElement("h1",{id:"heading"},"hi from react scripts");
const root=ReactDOM.createRoot(document.getElementById("root")); 

root.render(heading);