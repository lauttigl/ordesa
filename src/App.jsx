import { NavBar } from "./Components/NavBar/NavBar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from "./Pages/Home/Home";
import { Services } from "./Pages/Services/Services";
import { RedElectrica } from "./Pages/RedElectrica/RedElectrica";
import { SeguridadElectronica } from "./Pages/Seguridad Electronica/SeguridadElectronica";
import { Obras } from "./Pages/Obras/Obras";
import { Contact } from "./Pages/Contact/Contact";
import { InstalacionesDom } from "./Pages/Instalaciones Dom/InstalacionesDom";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contacto" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path = "/red" element={<RedElectrica/>}/>
    <Route path="/seguridad" element={<SeguridadElectronica/>}/>
    <Route path="/obras" element= {<Obras/>}/>
    <Route path="/instalaciones" element={<InstalacionesDom/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
