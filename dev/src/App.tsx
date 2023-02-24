import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <InlineMath>\int_0^\infty x^2 dx\ hello</InlineMath>
    </div>
  );
}

export default App;
