
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Header from "./components/header";

console.log("App is rendering..");

export default function App(){
  return(
   <Router>
   <Header />
<Routes>
  <Route index element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NoPage />} />
</Routes>
</Router>


  );
}
