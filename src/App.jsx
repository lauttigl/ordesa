import { NavBar } from "./Components/NavBar/NavBar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from "./Pages/Home/Home";
import { Services } from "./Pages/Services/Services";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/services" element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
