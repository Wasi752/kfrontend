import './App.css';
import { Routes, Route } from "react-router-dom";
import BookCategory from './Pages/stockCategory';
import SignUp from './Pages/signUp';
import Signin from './Pages/signIn';
import ChangePassword from './Pages/changePassword';
import RecoverPassword from './Pages/recoverPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="forget" element={<RecoverPassword/>} />
        <Route path="/change/:id" element={<ChangePassword/>} />
        <Route path="/home/:id" element={<BookCategory/>} />
      </Routes>
    </div>
  );
}

export default App;
