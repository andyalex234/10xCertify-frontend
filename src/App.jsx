import Auth from "./pages/Auth"
import "./App.css";
import AdminDashboard from "./pages/AdminDashboard"
import TraineeDashboard from "./pages/TraineeDashboard"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Auth/>}/>
      <Route path={"/admin"} element={<AdminDashboard/>}/>
      <Route path={"/trainee"} element={<TraineeDashboard/>}/>
    </Routes>
  );
}

export default App;
