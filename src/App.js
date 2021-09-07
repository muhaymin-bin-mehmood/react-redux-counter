import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';
import { multiplyNumber, divideNumber } from './actions/index';
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const CalcState = useSelector((state) => state.calcTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <span className="my-5"></span>
      <h1>Increment / Decrement Counter</h1>
      <h3>using React and Redux</h3>
      <div className="quantity">
        <a href="#" className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}>-</a>
        <input name="quantity" type="text" className="quantity__input" value={myState} />
        <a href="#" className="quantity__plus" title="Increment" onClick={() => dispatch(incNumber())}>+</a>
      </div>
      <span className="my-5"></span>
      <h1>Multiplication / Division Counter</h1>
      <h3>using React and Redux</h3>
      <div className="quantity">
        <a href="#" className="quantity__minus" title="Decrement" onClick={() => dispatch(multiplyNumber())}>*</a>
        <input name="quantity" type="text" className="quantity__input" value={CalcState} />
        <a href="#" className="quantity__plus" title="Increment" onClick={() => dispatch(divideNumber())}>/</a>
      </div>
    </>
  );
}

export default App;
