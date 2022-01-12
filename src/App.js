import { Box } from "@chakra-ui/react";
import NewsPage from "./app/pages/News/NewsPage";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import TermsPage from "./app/pages/Legal/TermsPage";
import PrivacyPage from "./app/pages/Legal/PrivacyPage";
import ArticlePage from "./app/pages/News/ArticlePage";
import Header from "./app/components/header/Header";
import Footer from "./app/components/footer/Footer";
import AuthContextProvider from "./app/components/contexts/AuthContext";
import ProfilePage from "./app/pages/user/ProfilePage";
import UpdateProfilePage from "./app/pages/user/UpdateProfilePage";
import PortfolioPage from "./app/pages/user/PortfolioPage";
import { useAuth } from "./app/components/contexts/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return (
    <Box>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route exact path="/user/portfolio" element={<PortfolioPage />} />
          <Route exact path="/profile/update" element={<UpdateProfilePage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
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

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth();
  const { path } = props;
  return currentUser ? (
    <Route {...props} />
  ) : (
    <Navigate to={{ pathname: "/", state: { from: path } }} />
  );
};

export default App;
