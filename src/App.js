import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <br />
      <CounterV1 />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date("August 17 2024");
  date.setDate(date.getDate() + count);

  function handleStepMinus() {
    setStep((s) => s - 1);
  }
  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((s) => s - step);
  }
  function handleCountPlus() {
    setCount((s) => s + step);
  }
  function handleReset() {
    setCount(0);
    setStep(0);
  }

  return (
    <>
      <div>
        <h1>Step Counter </h1>
        <button onClick={handleStepMinus}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountPlus}>+</button>
      </div>
      {count === 0 && <p>Today is {date.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from now is {date.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was {date.toDateString()}
        </p>
      )}
      {step === 0 && count === 0 ? null : (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}

function CounterV1() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date("August 17 2024");
  date.setDate(date.getDate() + count);

  function handleCountMinus() {
    setCount((s) => s - step);
  }
  function handleCountPlus() {
    setCount((s) => s + step);
  }
  function handleReset() {
    setCount(0);
    setStep(0);
  }

  return (
    <>
      <div>
        <h1>Slider Counter </h1>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleCountPlus}>+</button>
      </div>
      {count === 0 && <p>Today is {date.toDateString()}</p>}
      {count > 0 && (
        <p>
          {count} days from now is {date.toDateString()}
        </p>
      )}
      {count < 0 && (
        <p>
          {Math.abs(count)} days ago was {date.toDateString()}
        </p>
      )}

      {step === 1 && count === 0 ? null : (
        <button onClick={handleReset}>Reset</button>
      )}
    </>
  );
}
