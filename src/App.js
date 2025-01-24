import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home'
import SignUp from './pages/signup';
import Login from './pages/login';
import About from './pages/About'
import Logout from './pages/logout'
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/logout' element={<Logout/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
