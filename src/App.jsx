import { useState } from "react";
import "./App.css";
import Rate from "./components/Rate";
import Result from "./components/Result";
import React from "react";

function App() {
  const [submit, setSubmit] = useState(false);
  const [rate, setRate] = useState();

  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      )}
    </>
  );
}

export default App;
