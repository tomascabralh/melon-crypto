import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/News/NewsPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import TermsPage from "./app/pages/Legal/TermsPage";
import PrivacyPage from "./app/pages/Legal/PrivacyPage";
import ArticlePage from "./app/pages/News/ArticlePage";
import Header from "./app/components/header/Header";
import Footer from "./app/components/footer/Footer";
import AuthContextProvider from "./app/components/contexts/AuthContext";

function App() {
  return (
    <Box>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route exact path="/news/:news" element={<ArticlePage />} />
          <Route exact path="/news" element={<NewsPage />} />
          <Route exact path="/coins/:id" element={<CoinPage />} />
          <Route exact path="/coins" element={<LandingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </Box>
  );
}

export default App;
