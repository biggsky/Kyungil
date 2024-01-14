import React from "react";
import {createRoot} from "react-dom/client";
// react 버전 18 버전부터
// react-dom/client에서 createRoot사용하라고 권장함
import App from "./app";

const root = createRoot(document.querySelector("#root"));
root.render(<App />)