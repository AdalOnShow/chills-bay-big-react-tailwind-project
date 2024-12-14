/* eslint-disable react/prop-types */
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const Wrapper = ({ children, isDark }) => {
    return (
        <main className={isDark ? "dark" : ""}>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
export default Wrapper
