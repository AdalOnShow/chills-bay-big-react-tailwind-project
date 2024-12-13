import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import HomePage from "./HomePage/HomePage.jsx";
import DrinkPage from "./DrinkPage/DrinkPage.jsx";
import ClubPage from "./ClubPage/ClubPage.jsx";
import CardPage from "./CardPage/CardPage.jsx";
import ContactPage from "./ContactPage/ContactPage.jsx";

const App = () => {
    return (
        <main className="font-RedHatDisplay text-blueGray">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/drink" element={<DrinkPage />} />
                    <Route path="/club" element={<ClubPage />} />
                    <Route path="/card" element={<CardPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    )
}

export default App