import { useState } from "react";
import "./style.css";

function InputBox() {
  const [text, setText] = useState("hi");

  function handleInputTextBoxChange(e) {
    return setText(e.target.value);
  }

  function doubleString(input) {
    let array = [];
    const inputText = input.split(" ");
    inputText.map((element) => {
      array.push(element + " " + element + " ");
    });
    return array.join(" ");
  }

  return (
    <>
      <div className="container">
        <label>
          write something:
          <input value={text} onChange={handleInputTextBoxChange} />
        </label>
        <p className="textContainer">{doubleString(text)}</p>
      </div>
    </>
  );
}

export default InputBox;
