import React, { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const addValue = (e) => {
    setValue(value.concat(e.target.value));
  };
  const Evaluate = () => {
    setValue(eval(value).toString());
  };

  const Backspace = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <>
      <div style={{ marginTop: "100px" }} className="container-fluid">
        <div className="row ">
          <div className="col-4 bg-info offset-4 ">
            <div className="row">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="p-3   text-end rounded text-secondary"
                type="text"
              />
            </div>

            <div className="row p-2">
              <button
                value="C"
                onClick={() => setValue("")}
                className=" col-6 btn btn-dark text-info"
              >
                C
              </button>
              <button
                onClick={Backspace}
                className="col-3 ml-2 btn btn-dark text-danger"
              >
                &#8594;
              </button>
              <button
                value="/"
                onClick={addValue}
                className="col-3 ml-2 btn btn-dark text-danger"
              >
                /
              </button>
            </div>

            <div className="row p-2">
              <button
                value="1"
                onClick={addValue}
                className=" col-3 btn btn-dark text-info"
              >
                1
              </button>
              <button
                value="2"
                onClick={addValue}
                className="col-3  btn btn-dark text-warning"
              >
                2
              </button>
              <button
                value="3"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                3
              </button>
              <button
                value="+"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                +
              </button>
            </div>
            <div className="row p-2">
              <button
                value="4"
                onClick={addValue}
                className=" col-3 btn btn-dark text-info"
              >
                4
              </button>
              <button
                value="5"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                5
              </button>
              <button
                value="6"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                6
              </button>
              <button
                value="-"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                -
              </button>
            </div>
            <div className="row p-2">
              <button
                value="7"
                onClick={addValue}
                className=" col-3 btn btn-dark text-info"
              >
                7
              </button>
              <button
                value="8"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                8
              </button>
              <button
                value="9"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                9
              </button>
              <button
                value="*"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                *
              </button>
            </div>
            <div className="row p-2">
              <button
                value="0"
                onClick={addValue}
                className=" col-3 btn btn-dark text-info"
              >
                0
              </button>
              <button
                value="00"
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                00
              </button>
              <button
                value="."
                onClick={addValue}
                className="col-3  btn btn-dark text-danger"
              >
                .
              </button>
              <button
                onClick={Evaluate}
                className="col-3  btn btn-dark text-danger"
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
