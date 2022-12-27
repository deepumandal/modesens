import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import { Menspage } from "./pages/MensPage/Menspage";
import Offers from "./pages/OffersPage/Offers";
import Community from "./pages/Community/Community";
import { Productdisplay } from "./component/Productdisplay";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  // dispatch(check())  
  // }, [])
  

  return (
    <div className="App"  >

      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/shop-women-clothing" element={<Menspage />}></Route>
        <Route path="/shop-men-clothing" element={<Menspage />}></Route>
        <Route path="/beauty" element={<Menspage />}></Route>
        <Route path="/kids" element={<Menspage />}></Route>
        <Route path="/designers" element={<Menspage />}></Route>
        <Route path="/why" element={<Menspage />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/proddisplay/:description" element={<Productdisplay />} ></Route>
        <Route path="/community" element={<Community />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
