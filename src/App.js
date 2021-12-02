import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/NewsPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import Footer from "./app/components/footer/Footer";
import TermsPage from "./app/pages/Legal/TermsPage";
import PrivacyPage from "./app/pages/Legal/PrivacyPage";
import Header from "./app/components/header/Header";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route exact path="/news/:news" element={<NewsPage />} />
        <Route exact path="/coins/:id" element={<CoinPage />} />
        <Route exact path="/coins" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
