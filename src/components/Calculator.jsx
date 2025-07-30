import Keypad from "./Keypad";
import Display from "./Display";
import { useState } from "react";

const Calculator = ()=>{

const [input, setInput] = useState('');
  const handleNumberClick = (num) => setInput((prev) => prev + num);

const handleOperatorClick = (op) => setInput((prev) => prev + op);
;

    const DecimalClick = () => {
       if(!input.endwith(".")) setInput((prev) => prev + '.');
    };

    const handleEqualsClick = ()=>{
        try {
            setInput(eval(input).toString());
        }catch (error) {
      setInput("Error");
        }

    }



    return(
        <div className="bg-gray-900  text-bold text-white max-w-sm mx-auto  mt-10 p-4 rounded-xl shadow-lg h-130"> 
            <Keypad 
            handleEqualsClick={handleEqualsClick}
            handleNumberClick={handleNumberClick}
            handleOperatorClick={handleOperatorClick}
            />
        </div>
    )
}


export default  Calculator;