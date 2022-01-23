import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from "./app/pages/LandingPage";
import NewsPage from "./app/pages/News/NewsPage";
import NotFoundPage from "./app/pages/NotFoundPage";
import CoinPage from "./app/pages/CoinPage";
import TermsPage from "./app/pages/Legal/TermsPage";
import PrivacyPage from "./app/pages/Legal/PrivacyPage";
import ArticlePage from "./app/pages/News/ArticlePage";
import ProfilePage from "./app/pages/user/ProfilePage";
import PortfolioPage from "./app/pages/user/PortfolioPage";
import PasswordResetPage from "./app/pages/user/PasswordResetPage";
import SearchNewsPage from "./app/pages/News/SearchNewsPage";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/user/portfolio" element={<PortfolioPage />} />
        <Route
          exact
          path="/profile/password-reset"
          element={<PasswordResetPage />}
        />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/news/:news" element={<ArticlePage />} />
        <Route
          exact
          path="/news/search/search_query=:query"
          element={<SearchNewsPage />}
        />
        <Route exact path="/news" element={<NewsPage />} />
        <Route exact path="/coins/:id" element={<CoinPage />} />
        <Route exact path="/coins" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;

/*const ProtectedRoute = async () => {
  const { currentUser } = useAuth;

  return currentUser ? <Outlet /> : <Navigate to="/" />;

  onValue(ref(getDatabase(), "users/" + currentUser?.uid), (snapshot) => {
    const data = snapshot.val();
    console.log(currentUser);
    if (data !== null) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  
};}*/

//isAuthenticated ? <Outlet /> : <Navigate to="/" />;
