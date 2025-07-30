 const Keypad = ({
  handleNumberClick,
  handleOperatorClick,
  onDecimalClick,
  handleEqualsClick,
  handleClearClick,
  handleDeleteClick,
}) => {
  const baseClasses = "text-xl font-semibold py-4 rounded-2xl shadow-inner transition-all";
  const numberBtn = "bg-gray-800 text-white hover:brightness-110";
  const operatorBtn = "bg-orange-500 text-white hover:brightness-110";
  const specialBtn = "bg-gray-500 text-white hover:brightness-110";

  
 
    return (
        
              <div className="grid grid-cols-4 gap-2 p-4 h-100">

            <button onClick={handleClearClick} className={`${baseClasses} ${specialBtn}`}>C</button>
            <button onClick={() => handleOperatorClick("%")} className={`${baseClasses} ${operatorBtn}`}>%</button>
            <button onClick={() => handleOperatorClick("/")} className={`${baseClasses} ${operatorBtn}`}>/</button>
            <button onClick={handleDeleteClick} className={`${baseClasses} ${specialBtn}`}>DEL</button>

            <button onClick={() => handleNumberClick("7")} className={`${baseClasses} ${numberBtn}`}>7</button>
            <button onClick={() => handleNumberClick("8")} className={`${baseClasses} ${numberBtn}`}>8</button>
            <button onClick={() => handleNumberClick("9")} className={`${baseClasses} ${numberBtn}`}>9</button>
            <button onClick={() => handleOperatorClick("*")} className={`${baseClasses} ${operatorBtn}`}>*</button>


                <button onClick={() => handleNumberClick("4")} className={`${baseClasses} ${numberBtn}`}>4</button>
              <button onClick={() => handleNumberClick("5")} className={`${baseClasses} ${numberBtn} `}>5</button>
                <button onClick={() => handleNumberClick("6")} className={`${baseClasses} ${numberBtn}`}>6</button>
                <button onClick={() => handleOperatorClick("-")} className={`${baseClasses} ${operatorBtn}`}>-</button>

                <button onClick={() => handleNumberClick("1")} className={`${baseClasses} ${numberBtn}`}>1</button>
                <button onClick={() => handleNumberClick("2")} className={`${baseClasses} ${numberBtn}`}>2</button>
                <button onClick={() => handleNumberClick("3")} className={`${baseClasses} ${numberBtn}}`}>3</ button>
                <button onClick={() => handleOperatorClick("+")} className={`${baseClasses} ${operatorBtn}`}>+</button>

                <button onClick={() => handleNumberClick("0")} className={`${baseClasses} ${numberBtn}`}>0</button>
                <button onClick={onDecimalClick} className={`${baseClasses} ${numberBtn}`}>.</button>
                <button onClick={handleEqualsClick} className={`${baseClasses} ${specialBtn}`}>=</button>


                <button onClick={() => handleEqualsClick("=")} className={`${baseClasses} ${specialBtn}`}>^</button>



    </div>
        
  );
};


export default Keypad;
