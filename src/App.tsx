import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

import './styles.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state: any) => state.counter);
  const isLogged = useSelector((state: any) => state.isLogged);

  return (
    <div className="container">
      <h1>React Redux Example</h1>

      <div className="counter">
        <span>Counter: {counter}</span>

        <div className="buttons">
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </div>

      <div className="logged-container">
        <span className="logged">{isLogged ? `logged!` : 'not logged :('}</span>
        <button onClick={() => dispatch(signIn())}>{isLogged ? 'Sign out' : 'Sign in'}</button>
      </div>
    </div>
  );
}

export default App;
