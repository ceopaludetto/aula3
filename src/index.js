import React from "react";
import ReactDOM from "react-dom";

import { AppComHook, AppComClass } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <AppComHook />
    <AppComClass />
  </React.StrictMode>,
  document.getElementById("root")
);
