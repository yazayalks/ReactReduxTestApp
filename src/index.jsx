import React from "react"
import { createRoot } from "react-dom/client"
import './less/index.less'
import App from "./components/app/App"
import {Provider} from "react-redux";
import {store} from "./toolkitRedux/index";


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>
)

