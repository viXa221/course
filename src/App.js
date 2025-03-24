
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoPage from "./pages/NoPage";


export default function App(){
  return(
    <div>
      <header />
<BrowserRouter>
<Routes>
  <Route index element={<Home />} />
  <Route path="/home" element={<home />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NoPage />} />
</Routes>
</BrowserRouter>
    </div>
  )
}
