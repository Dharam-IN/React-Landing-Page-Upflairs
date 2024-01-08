import './App.css';
import {Routes, Route} from 'react-router-dom';
import Mainpage from './Components/Mainpage';
import './Components/Style/style.css';
import PopupForm from './Components/PopupForm';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
      </Routes>
    </>
  );
}

export default App;
