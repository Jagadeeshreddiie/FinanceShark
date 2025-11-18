import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div style={{ textAlign: "center", color: "red" }}>
        <strong>
          <button onClick={() => setValue(value + 1)}>Click to increase</button>
        </strong>
        <p>{value}</p>
      </div>
    </>
  );
}

export default App;
