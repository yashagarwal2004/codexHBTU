import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

function Body() {
    return <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);
