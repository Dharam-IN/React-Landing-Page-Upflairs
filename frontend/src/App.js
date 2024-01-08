import './App.css';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import './Components/Style/style.css';
import FullStackPage from './Components/FullStackPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/fullstack' element={<FullStackPage/>}/>
      </Routes>
    </>
  );
}

export default App;
