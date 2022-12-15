import { useEffect } from "react";
import "./App.css";
import Auth from "./Auth/Auth";
import Nav from "./Nav/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <AuthContext>
      <div>
        <Nav />
        <div className="main">
          <Routes>
            <Route exact path="/auth" element={<Auth />}></Route>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </div>
    </AuthContext>
  );
}

export default App;
