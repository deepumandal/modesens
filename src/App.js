import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import { Menspage } from "./pages/MensPage/Menspage";
import Offers from "./pages/OffersPage/Offers";
import Community from "./pages/Community/Community";
function App() {
  return (
    <div className="App"  >
      
      <Navbar />
      {/* here routes and route comes here */}
      <br/>
      
      <Routes >
        <Route path="/" element={ <Home /> }  />
        <Route path="/shop-men-clothing" element={<Menspage/>}></Route>
        <Route path="/offers" element={<Offers/>}></Route>
        <Route path="/community" element={<Community/>}></Route>
      </Routes>
      {/* <Offers/> */}
    </div>
  );
}

export default App;
