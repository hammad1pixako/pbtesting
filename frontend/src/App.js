import { UserProvider } from './context';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Header from './shared/Header';
import MyProfile from './pages/MyProfile';
import Test from './pages/Test';
import MessagePage from './pages/MessagePage/MessagePage.js';

function App() {


  return (
    <UserProvider>
      <div className="flex">
        <ToastContainer position='top-right' theme="colored" />
        <div className={`p-4 w-full`}>
        <Header className='w-full' />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/message" element={<MessagePage />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
