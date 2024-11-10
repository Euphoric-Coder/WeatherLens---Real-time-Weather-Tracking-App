import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDashboard from "./components/WeatherDashboard";
import CityPage from "./components/CityPage";
import { Layout } from "./components/layout";

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<WeatherDashboard />} />
        <Route path="/city/:cityName" element={<CityPage />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default App;
