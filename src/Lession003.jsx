import { useState } from "react";
import enviroment from "./shared/environment";

const Counter = ({ number, children, ...props }) => {
  return (
    <>
      <a {...props}>
        Counter Name:{children}
        <br />
        Value: {number}
      </a>
    </>
  );
};

const Lession003 = () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {values.map((v, index) => (
        <Counter key={index} number={v} className="btn btn-primary">
          Counter {index + 1}
        </Counter>
      ))}
    </>
  );
};

export default Lession003;
