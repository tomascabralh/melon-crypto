import { Box } from "@chakra-ui/react";
import Header from "./app/components/header/Header";
import Footer from "./app/components/footer/Footer";
import AuthContextProvider from "./app/components/contexts/AuthContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <Box>
      <AuthContextProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthContextProvider>
    </Box>
  );
}

export default App;
