import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BookCategory from './Pages/stockCategory';
import SignUp from './Pages/signUp';
import Signin from './Pages/signIn';
import GetPassword from './Pages/getPassword';
import ChangePassword from './Pages/changePassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="forget" element={<GetPassword/>} />
        <Route path="/signin/:id" element={<ChangePassword/>} />
        <Route path="/home" element={<BookCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
