import { useState } from "react";
import enviroment from "./shared/environment";

const Lession003 = () => {
  const [stateObject, setStateObject] = useState({
    a: {
      b: {
        c: 1,
      },
    },
  });
  console.log("Before render, stateObject.a.b.c:", stateObject.a.b.c);
  return (
    <>
      <h2>State and Event</h2>
      <h3>StateObject: {JSON.stringify(stateObject)}</h3>
      <button
        type="button"
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          setStateObject((obj) => {
            console.log(obj.a.b.c, "obj === stateObject", obj === stateObject);
            return {
              ...obj,
              a: {
                b: {
                  c: obj.a.b.c + 1,
                },
              },
            };
          });
        }}
      >
        Increase counter
      </button>
    </>
  );
};

export default Lession003;
