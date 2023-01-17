import { NavBar } from "./Components/NavBar/NavBar";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from "./Pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
