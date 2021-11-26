import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/NewsPage";
import TermsPage from "./app/pages/TermsPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import Header from "./app/components/Header";

function App() {
  return (
    <Box>
      <Header />
      <Box>
        <Routes>
          <Route exact path="/news/:news" element={<NewsPage />} />
          <Route exact path="/coins/:coin" element={<CoinPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
