import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
function App() {
  return (
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
