import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element= {<EditUser/>} />
        <Route path="/view/:id" element = {<ViewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
