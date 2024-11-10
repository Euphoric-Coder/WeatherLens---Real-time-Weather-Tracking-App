import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDashboard from "./pages/WeatherDashboard";
import CityPage from "./pages/CityPage";
import { Layout } from "./components/layout";
import { ThemeProvider } from "./context/theme-provider";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
