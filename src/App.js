import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignUp2 from './FirebasePages/Signup';
import Login from './FirebasePages/Login';
import SignUp from './Pages/signUp';
import Signin from './Pages/signIn';
import ChangePassword from './Pages/changePassword';
import RecoverPassword from './Pages/recoverPassword';
import UserDesh from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="forget" element={<RecoverPassword />} />
        <Route path="/change/:id" element={<ChangePassword />} />
        <Route path="/admin/:id" element={<UserDesh />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
