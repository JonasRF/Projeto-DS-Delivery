import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Orders from "./Orders";
import NavBar from "./NavBar";

const Rotas = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;
