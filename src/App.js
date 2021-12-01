import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/NewsPage";
import TermsPage from "./app/pages/TermsPage";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route exact path="/news/:news" element={<NewsPage />} />
        <Route exact path="/coins/:id" element={<CoinPage />} />
        <Route exact path="/coins" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
