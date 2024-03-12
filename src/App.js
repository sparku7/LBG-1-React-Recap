import logo from './logo.svg';
import './App.css';
import Pet from './components/Pet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PetContainer from './components/PetContainer';
import PetForm from './components/PetForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import PetDetails from './components/PetDetails';
function App() {

  const [data, setData] = useState([]);

  async function getPets() {
    try {
      const res = await axios.get("http://localhost:8080/pets")
      console.log("RES:", res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log("EFFECT USED");
    getPets();
  }, []);

  return (
    <Router>
      <nav>
        <Link to='/add'>Add Pet</Link>
        <Link to='/get'>View Pets</Link>
      </nav>
      <Routes>
        <Route path='/add' element={<PetForm getPets={getPets} />} />
        <Route path="/get" element={<PetContainer pets={data} />} />
        <Route path="/get/:id" element={<PetDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
