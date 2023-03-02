import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './FirebasePages/Home';
import SignUp2 from './FirebasePages/Signup';
import Login from './FirebasePages/Login';
{/* 
import SignUp from './Pages/signUp';
import Signin from './Pages/signIn';
import ChangePassword from './Pages/changePassword';
import RecoverPassword from './Pages/recoverPassword';
import BookCategory from './Pages/Dashboard';
import { AuthProvider } from './context/AuthContext'; 
*/}


function App() {
  return (
    <div className="App">
      <Routes>
        {/*<AuthProvider>
            <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="forget" element={<RecoverPassword/>} />
        <Route path="/change/:id" element={<ChangePassword/>} />
  <Route path="/home/:id" element={<BookCategory/>} /> 
        </AuthProvider> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
