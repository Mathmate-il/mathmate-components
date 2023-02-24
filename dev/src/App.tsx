import "katex/dist/katex.min.css";
import "./App.css";
import Latex from "react-latex";
import { MathOperations } from "./operators";

function App() {
  return (
    <div className="App">
      <Latex>{`What is $(3 ${MathOperations.times} 4)  ${MathOperations.dividedBy}  (5-3)$`}</Latex>
    </div>
  );
}

export default App;
