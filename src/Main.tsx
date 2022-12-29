import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UseEffectPage from './Components/UseEffect';

const Main = () => {
return (         
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/useeffect' element={<UseEffectPage/>} />
    </Routes>
);
}
export default Main;