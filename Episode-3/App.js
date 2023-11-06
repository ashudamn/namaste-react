import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement("span",{id:"my-span"},"okayish span");
const heading2=<h1>heading from JSX singleline</h1>;
const multilineHeading=(<h2>
    heading from jsx multiline
    </h2>)
const root=ReactDOM.createRoot(document.getElementById("root"));
const CallComponent=()=>(<><h2>call me as a function</h2></>);
const CallAsJSX=()=><h3>JSX component call</h3>;
const JsxComponent = () => {
    return <>{multilineHeading}<h1>jsx component</h1>
    <CallAsJSX />
    <>{CallComponent()}{console.log("logs")}</>
    {heading2}
    </>
}
console.log(heading);

root.render(JsxComponent());