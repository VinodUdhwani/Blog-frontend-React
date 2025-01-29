import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/home'
import SignUp from './pages/signup';
import Login from './pages/login';
import About from './pages/About'
import Services from './pages/service'
import Feeds from './components/feeds'
import PrivateRoute from './pages/privateRoute'
import DashBoard from './pages/user-routes/userDashboard'
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <BrowserRouter>
    <ToastContainer position='bottom-center'/>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Services/>}></Route>
            <Route path='/feed' element={<Feeds/>}></Route>
            <Route path='/user' element={<PrivateRoute/>}>
                <Route path='dashboard' element={<DashBoard/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
