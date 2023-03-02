import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./HomeFirebase";
import SignUp2 from "./SignupFirebase";
import Signin from "./LoginFirebase";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/login" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
