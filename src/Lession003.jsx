import { useState } from "react";
import enviroment from "./shared/environment";

const Lession003 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(1);
  console.log("Before render, counter:", counter, "counter2:", counter2);
  return (
    <>
      <h2>State and Event</h2>
      <h3>Counter: {counter}</h3>
      <h3>Counter2: {counter2}</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          console.log(`Increase counter from ${counter} to ${counter + 2}`);
          console.log(`Increase counter from ${counter2} to ${counter2 + 3}`);
          setCounter(counter + 2);
          setCounter2(counter2 + 3);
        }}
      >
        Increase counter
      </button>
    </>
  );
};

export default Lession003;
