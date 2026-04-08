import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BlogBestGiftingPage from "./pages/BlogBestGiftingPage";
import BlogPoloTshirtsPage from "./pages/BlogPoloTshirtsPage";
import BlogWelcomeGuidePage from "./pages/BlogWelcomeGuidePage";
import CorporateGiftsPage from "./pages/CorporateGiftsPage";
import CustomizedJacketsPage from "./pages/CustomizedJacketsPage";
import CustomizedMugsPage from "./pages/CustomizedMugsPage";
import CustomizedTshirtsPage from "./pages/CustomizedTshirtsPage";
import HomePage from "./pages/HomePage";
import IdCardsPage from "./pages/IdCardsPage";
import JacketsPage from "./pages/JacketsPage";
import LanyardsPage from "./pages/LanyardsPage";
import PoloTshirtsPage from "./pages/PoloTshirtsPage";
import SipperBottlesPage from "./pages/SipperBottlesPage";
import StandeesPage from "./pages/StandeesPage";
import TrophiesPage from "./pages/TrophiesPage";
import WelcomeGiftsPage from "./pages/WelcomeGiftsPage";
import WelcomeGoodiesPage from "./pages/WelcomeGoodiesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/corporate-gifts" element={<CorporateGiftsPage />} />
          <Route path="/welcome-gifts" element={<WelcomeGiftsPage />} />
          <Route path="/trophies" element={<TrophiesPage />} />
          <Route path="/lanyards" element={<LanyardsPage />} />
          <Route
            path="/customized-tshirts"
            element={<CustomizedTshirtsPage />}
          />
          <Route path="/jackets" element={<JacketsPage />} />
          <Route
            path="/customized-jackets"
            element={<CustomizedJacketsPage />}
          />
          <Route path="/welcome-goodies" element={<WelcomeGoodiesPage />} />
          <Route path="/polo-tshirts" element={<PoloTshirtsPage />} />
          <Route path="/sipper-bottles" element={<SipperBottlesPage />} />
          <Route path="/customized-mugs" element={<CustomizedMugsPage />} />
          <Route path="/standees" element={<StandeesPage />} />
          <Route path="/id-cards" element={<IdCardsPage />} />
          <Route
            path="/blog/best-corporate-gifting-ideas"
            element={<BlogBestGiftingPage />}
          />
          <Route
            path="/blog/welcome-gift-guide"
            element={<BlogWelcomeGuidePage />}
          />
          <Route
            path="/blog/polo-tshirts-bulk-order"
            element={<BlogPoloTshirtsPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
