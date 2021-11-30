import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/NewsPage";
import TermsPage from "./app/pages/TermsPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import Footer from "./app/components/Footer/Footer";

function App() {
  return (
    <Box>
      <Box>
        <Routes>
          <Route exact path="/news/:news" element={<NewsPage />} />
          <Route exact path="/coins/:coin" element={<CoinPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
