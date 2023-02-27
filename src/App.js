import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BookCategory from './Pages/stockCategory';
import SignUp from './Pages/signUp';
import Signin from './Pages/signIn';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<BookCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
