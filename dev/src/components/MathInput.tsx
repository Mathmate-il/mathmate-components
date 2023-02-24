import React, { useState } from "react";
import Latex from "react-latex";
import MathButtonList from "./MathButtonList";

function MathInput() {
  const [input, setInput] = useState("");
  const handleButtonClick = (operation: string) => {
    if (operation === " ") {
      setInput((prevInput) => `${prevInput} `);
    } else {
      setInput((prevInput) => `${prevInput}${operation}`);
    }
  };
  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === " ") {
      event.preventDefault();
      setInput((prevInput) => `${prevInput}\\ `);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <MathButtonList
        onButtonClick={(operation) => handleButtonClick(operation)}
      />
      <div>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={(event) => handleInputKeyDown(event)}
          placeholder="Type your question or equation here"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <div>
        <Latex>{`$${input}$`}</Latex>
      </div>
    </form>
  );
}

export default MathInput;
