import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const Submit = () => {
    setTodoList([...todoList, todo]);
  };

  // const [rat, setRat] = useState(0);
  // const [text , setText] = useState("");
  // const [submit , setSubmit] = useState();

  // const handleSubmit = (e) => {
  //   if (rat <= 3 && text.length <= 5) {
  //     alert("Please Enter comment for the above Rating");
  //   } else {
  //     setText("");
  //     alert("Thank you for your feedback");
  //   }
  // }

  // const [num, setNum] = useState("");
  // const [numOne, setNumOne] = useState("5");
  // const [numTwo, setNumTwo] = useState("4");

  // const addNum = () => {
  //   const sum = parseInt(numOne) + parseInt(numTwo);
  //   setNum(sum);
  // }
  // const subNum = () => {
  //   const sum = parseInt(numOne) - parseInt(numTwo);
  //   setNum(sum);
  // }

  // const Multiplied = () => {
  //   const sum = parseInt(numOne) * parseInt(numTwo);
  //   setNum(sum);
  // }

  // const Divided = () => {
  //   const sum = parseInt(numOne) / parseInt(numTwo);
  //   setNum(sum);
  // }

  return (
    <div className="App">
      {/* <div>num1 : {numOne}</div>
      <div>num2 : {numTwo}</div>
      <div>sum : {num}</div>
      <button onClick={addNum}>+</button>
      <button onClick={subNum}>-</button>
      <button onClick={Multiplied}>*</button>
      <button onClick={Divided}>/</button> */}

      {/* <div>rat : {rat}</div> */}
      {/* <input
        type="range"
        value={rat}
        max={10}
        min={1}
        onChange={(e) => setRat(e.target.value)}
      />
      <br />
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />

      <button onClick={() => handleSubmit()}>Submit</button>
      <br /> */}

      <label>Enter your Task</label>
      <br></br>
      <input
        placeholder="Enter your Task"
        style={{
          width: "200px",
          height: "30px",
          borderRadius: "5px",
          border: "1px solid black",
          padding: "5px",
          outline: "none",
          margin: "5px",
        }}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          Submit();
        }}>
        Submit
      </button>
      <br />
      <div>
        <ul style={{ listStyleType: "none" }}>
          {todoList.map((todo, i) => (
            <li key={i}>
              <span
                style={{
                  color: "teal",
                  fontWeight: "bold",
                  fontSize: "20px",
                  marginRight: "10px",
                }}>
                {i + 1}.
              </span>{" "}
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
