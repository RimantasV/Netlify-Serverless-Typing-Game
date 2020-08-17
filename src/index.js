import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ScoreProvider } from "./contexts/ScoreContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>,
  rootElement
);
