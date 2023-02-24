import "katex/dist/katex.min.css";
import Latex from "react-latex";
import MathInput from "./components/MathInput";
import { MathOperations } from "./operators";

function App() {
  return (
    <div className="App">
      <MathInput />
    </div>
  );
}
export default App;
