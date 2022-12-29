import './App.css';
import { Link } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <div style={{"margin":"20px"}}>
        <Link to={''}>
          <button className='home-button'>
            Home
          </button>
        </Link>
        <Link to={'/useeffect'}>
          <button className='home-button'>
            UseEffect
          </button>
        </Link>
      </div>
        <hr />
        <Main />    
    </div>
  );
}

export default App;
