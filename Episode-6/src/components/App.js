import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);