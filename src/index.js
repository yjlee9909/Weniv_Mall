import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    // 엄격모드여서 콘솔로그에 2번씩 출력
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
