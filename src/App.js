import React, { useState } from "react";

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      // enlist-disable-next-line
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };

  const createKeys = () => {
    const keys = [];
    for (let i = 1; i < 10; i++) {
      keys.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }

    return keys;
  };

  const calculate = () => {
    //enlist-disable-next-line
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <main className="App">
      <section className="calculator">
        <aside className="display">
          {result ? <span>({result})</span> : ""} &nbsp; {calc || "0"}
        </aside>
        <article className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </article>
        <article className="keys">
          {createKeys()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>

          <button onClick={calculate}>=</button>
        </article>
      </section>
    </main>
  );
};

export default App;
