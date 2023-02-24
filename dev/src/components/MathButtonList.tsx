import React from "react";
import Latex from "react-latex";
import { MathOperations } from "../operators";

interface MathButtonListProps {
  onButtonClick: (value: string) => void;
}

const MathButtonList: React.FC<MathButtonListProps> = ({ onButtonClick }) => {
  const mathOperationsList = Object.values(MathOperations);

  return (
    <ul style={{ display: "flex", listStyle: "none", gap: 15 }}>
      {mathOperationsList.map((operation) => (
        <li key={operation}>
          <button onClick={() => onButtonClick(operation)}>
            <Latex>{`$${operation}$`}</Latex>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MathButtonList;
