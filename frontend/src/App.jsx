import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Pages/Login";
import Register from  "./Pages/Register";
import Dashboard from "./Pages/DashBoard";
import Leads from "./Pages/Leads";
import Team from "./Pages/Team";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/leads" element={<Leads/>}/>
        <Route path="/team"  element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;