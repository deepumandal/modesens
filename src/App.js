import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import { Menspage } from "./pages/MensPage/Menspage";
function App() {
  return (
    <div className="App"  >
      
      <Navbar />
      {/* here routes and route comes here */}
      <br/>
      <br/>
      <br/>
      <Routes >
        <Route path="/" element={ <Home /> }  />
        <Route path="/shop-men-clothing" element={<Menspage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
