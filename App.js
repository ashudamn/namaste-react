const h1 = React.createElement("h1", { id: "heading" }, "Hello from react!");
const h2 = React.createElement("h2", { id: "heading" }, "Hello from react!");
const div = React.createElement("div",
                                 { id: "parent" },
                                [React.createElement("div", { id: "child" }, h1),
                                React.createElement("div",{id:"child2"},h2)]
                                )

console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);