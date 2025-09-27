import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CareersPage from "./pages/CareersPage.tsx";
import GovernancePage from "./pages/GovernancePage.tsx";
import ServicePage from "./pages/ServicePage.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="governance" element={<GovernancePage />} />
        <Route path="service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
