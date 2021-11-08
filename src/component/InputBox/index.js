import { useState } from "react";
import "./style.css";

function InputBox() {
  const [text, setText] = useState();

  function handleInputTextBoxChange(e) {
    return setText(e.target.value);
  }

  return (
    <>
      <div className="container">
        <label>
          write something:{" "}
          <input
            value={text}
            onChange={handleInputTextBoxChange}
            // onChange={(e) => setText(e.target.value)}
          />
        </label>
        <p className="textContainer">{text}</p>
      </div>
    </>
  );
}

export default InputBox;
