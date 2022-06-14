import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
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
      </Routes>
    </div>
  );
}

export default App;
