import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from './actions';

function App() {
	const myState = useSelector((state) => state.inc_dec);
	const dispatch = useDispatch()
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
	  <h1>Hello, Welcome</h1>
	  <input type="text" value={myState} />	
	  <br />
	  <button className='btn btn-primary' onClick={() => dispatch(increase())}>Add</button>
	  <button className='btn btn-secondary' onClick={() => dispatch(decrease())}>Minus</button>

    </div>
  );
}

export default App;
