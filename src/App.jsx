import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wrapper from "./components/Wrapper.jsx";

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
                <Routes>
                    <Route path="/" element={
                        <Wrapper>
                            <HomePage />
                        </Wrapper>
                    } />
                    <Route path="/drink" element={
                        <Wrapper>
                            <DrinkPage />
                        </Wrapper>
                    } />
                    <Route path="/club" element={
                        <Wrapper isDark>
                            <ClubPage />
                        </Wrapper>
                    } />
                    <Route path="/card" element={
                        <Wrapper>
                            <CardPage />
                        </Wrapper>
                    } />
                    <Route path="/contact" element={
                        <Wrapper>
                            <ContactPage />
                        </Wrapper>
                    } />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App