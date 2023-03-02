import "./App.css";
//import { Routes, Route } from "react-router-dom";
import Home from "./FirebasePages/HomeFirebase";
import SignUp2 from "./FirebasePages/SignupFirebase";
import Login from "./FirebasePages/LoginFirebase";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <AuthProvider> */}
          <Route path="/" element={<Home />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<Login />} />
        {/* </AuthProvider> */}
      </Routes>
    </div>
  );
}

export default App;
