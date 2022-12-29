import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import UseEffectPage from './Components/UseEffect';
import UseStatePage from './Components/UseState/index';

const Main = () => {
return (         
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/useeffect' element={<UseEffectPage/>} />
      <Route path='/usestate' element={<UseStatePage/>}/>
    </Routes>
);
}
export default Main;