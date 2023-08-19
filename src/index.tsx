import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "./i18n";
import {FilterProvider} from "./Contexts/FilterContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <FilterProvider>
            <App/>
        </FilterProvider>
    </BrowserRouter>
);
