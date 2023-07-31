//No use npm
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom/client";
function InputValue(props) {
  return (
    <input
      type="number"
      autoFocus={props.turn}
      className={"bg-white w-6 mx-1 px-2" + props.show}
      id="num"
      ref={props.ur}
      pattern="[0-9]*"
      name={props.field}
      onChange={props.change}
      maxLength="1"
      onKeyDown={props.onKeyDown}
    />
  );
}
function App() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    setInput(e.currentTarget.value);
    console.log(input);

    if (e.currentTarget.value.length === 1) {
      e.target.focus();

      console.log(password);
      const nextfield = document.querySelector(
        `input[name=num-${fieldIntIndex + 1}]`
      );
      const currentfield = document.querySelector(
        `input[name=num-${fieldIntIndex}]`
      );
      const backfield = document.querySelector(
        `input[name=num-${fieldIntIndex - 1}]`
      );

      console.log(document.querySelector(`input[name=num-${1 + 1}]`).value);
      console.log(fieldIntIndex);
      if (nextfield !== null) {
        if (fieldIntIndex !== 7) {
          nextfield.focus();
        }
        else{
          currentfield.focus();
        }
        
      }
    }
    
  };
  const onClick = () => {
    const val =
      document.querySelector(`input[name=num-${1}]`).value +
      document.querySelector(`input[name=num-${2}]`).value +
      document.querySelector(`input[name=num-${3}]`).value +
      document.querySelector(`input[name=num-${4}]`).value +
      document.querySelector(`input[name=num-${5}]`).value +
      document.querySelector(`input[name=num-${6}]`).value;
    console.log(val);
  };
  const inputRef = useRef();

  const password = [];
  const ref = useRef(null);
  const [message, setMessage] = useState("");
  const handleKeyDown = (e) => {
    console.log("User pressed: ", e.key);
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    setInput(e.currentTarget.value);
    // console.log(message);

    if (e.key === "Backspace") {
      // 👇️ your logic here
      // if (fieldIntIndex === 5) {
      //   e.target.focus();
      // }
      console.log("Backspace key pressed ✅");
      e.target.focus();
      const backfield = document.querySelector(
        `input[name=num-${fieldIntIndex - 1}]`
      );
      const currentfield = document.querySelector(
        `input[name=num-${fieldIntIndex}]`
      );
      if (backfield !== null) {
        backfield.focus();
        
      }
      
      
        
      
    }
  };
  return (
    <div
      className="font-bold fixed w-60 h-60 bg-violet-200 top-1/2 left-1/2 ml-[-120px] mt-[-120px]
    rounded-xl"
    >
      <div className="flex justify-center m-2">
        <InputValue
          turn="autofocus"
          ur={inputRef}
          change={onChange}
          field="num-1"
          onKeyDown={handleKeyDown}
          show = ""
        />
        <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-2"
          onKeyDown={handleKeyDown}
          show = ""
        />
        <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-3"
          onKeyDown={handleKeyDown}
          show = ""
        />
        <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-4"
          onKeyDown={handleKeyDown}
          show = ""
        />
        <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-5"
          onKeyDown={handleKeyDown}
          show = ""
        />
        <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-6"
          onKeyDown={handleKeyDown}
          show = ""
        />
        
      </div>
      <InputValue
          turn=""
          ur={inputRef}
          change={onChange}
          field="num-7"
          onKeyDown={handleKeyDown}
          show = " w-0 opacity-1 invisible"
        />
      <button className="complete bg-sky-600 " onClick={onClick}>
        OK
      </button>
    </div>
  );
}

export default App;
