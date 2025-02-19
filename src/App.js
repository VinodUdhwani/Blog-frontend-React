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
import PagePost from './pages/postpage';
import CategoryPost from './components/CategoryPost';
import userContext from './pages/context/userContext';
import UserProvider from './pages/context/UserProvider';
import Profile from './pages/profile';
import UpdateBlog from './pages/update-blog';
import { CreateCategory } from './components/createCategory';
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <ToastContainer position='bottom-center'/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Services/>}></Route>
          <Route path='/feed' element={<Feeds/>}></Route>
          <Route path='/category/:categoryId' element={<CategoryPost/>}></Route>
          <Route path='/post/:postId' element={<PagePost/>}></Route>

          <Route path='/user' element={<PrivateRoute/>}>
              <Route path='dashboard' element={<DashBoard/>}></Route>
              <Route path='profile/:userId' element={<Profile/>}></Route>
              <Route path='update-blog/:blogId' element={<UpdateBlog/>}></Route>
              <Route path='createCategory' element={<CreateCategory/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
