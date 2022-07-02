import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from "./pages/Register"
import Admin from './pages/Admin/Admin';
import Posts from './pages/Admin/Posts';
import ViewEntries from './pages/Admin/ViewEntries';
import GenerateCertificate from './pages/Admin/GenerateCertificate';
import Results from './pages/Admin/Results';
import ViewMatches from './pages/Admin/ViewMatches';
import AdminLogin from './pages/Admin/AdminLogin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/viewEntries" element={<ViewEntries/>}/>
        <Route path="/certificate" element={<GenerateCertificate/>}/>
        <Route path="/result" element={<Results/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/matches" element={<ViewMatches/>}/>
      </Routes>
    </Router>
  );
}

export default App;
