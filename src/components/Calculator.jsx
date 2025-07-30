import Keypad from "./Keypad";
import Display from "./Display";
import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleNumberClick = (value) => {
           setInput((prev) => prev + value);
  }
   

  const handleOperatorClick = (operator) => {
        setInput((prev) => prev + operator);
  }
   

  const handleDecimalClick = () => {
        setInput((prev) => prev + '.');
  };

  const handleEqualsClick = () => {
    try {
      setInput(eval(input).toString());
    } catch(error) {
      setInput("Error");
    }
  };

  const handleClearClick = () => {
        setInput('');
  }
  
  const handleDeleteClick = () => {
       setInput((prev) => prev.slice(0, -1));
  }
  

  return (
    <div className="bg-gray-900 text-white max-w-sm mx-auto mt-10 p-4 rounded-xl shadow-lg">
      <Display input={input} />
      <Keypad
        handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleDecimalClick={handleDecimalClick}
        handleEqualsClick={handleEqualsClick}
        handleClearClick={handleClearClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};

export default Calculator;
