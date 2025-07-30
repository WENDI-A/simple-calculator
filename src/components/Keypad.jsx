const Keypad = ({ onNumberClick, onOperatorClick, onDecimalClick, onEqualsClick }) => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 h-130">
      <button onClick={() => onNumberClick("7")} className="keypad-button">7</button>
      <button onClick={() => onNumberClick("8")} className="keypad-button">8</button>
      <button onClick={() => onNumberClick("9")} className="keypad-button">9</button>
      <button onClick={() => onOperatorClick("/")} className="keypad-button">/</button>

      <button onClick={() => onNumberClick("4")} className="keypad-button">4</button>
      <button onClick={() => onNumberClick("5")} className="keypad-button">5</button>
      <button onClick={() => onNumberClick("6")} className="keypad-button">6</button>
      <button onClick={() => onOperatorClick("*")} className="keypad-button">*</button>

      <button onClick={() => onNumberClick("1")} className="keypad-button">1</button>
      <button onClick={() => onNumberClick("2")} className="keypad-button">2</button>
      <button onClick={() => onNumberClick("3")} className="keypad-button">3</button>
      <button onClick={() => onOperatorClick("-")} className="keypad-button">-</button>

      <button onClick={() => onNumberClick("0")} className="keypad-button">0</button>
      <button onClick={onDecimalClick} className="keypad-button">.</button>
      <button onClick={onEqualsClick} className="keypad-button">=</button>
      <button onClick={() => onOperatorClick("+")} className="keypad-button">+</button>
    </div>
  );
};

export default Keypad;
