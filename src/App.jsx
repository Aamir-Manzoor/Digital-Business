import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/dashboard/Dashboard";
import Layout from "./layouts/Layout";

function App() {
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}></Route>
    <Route path="/dashboard" element={Dashboard}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
