import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";
import 'bootstrap/dist/css/bootstrap.min.css'

import "./styles.css";

function App() {
  return (
    <div>
      <h1>Brains</h1>
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
