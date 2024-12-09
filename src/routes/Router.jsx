import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import About from "../pages/About"

const RouterLayout = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  )
}

export default RouterLayout