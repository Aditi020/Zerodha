import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './Components/Home/Home';
import Aboutpage from './Components/About/About';
import ProductPage from './Components/Products/ProductPage';
import PricingPage from './Components/Pricing/PricingPage';
import SupportPage from './Components/Support/SupportPage';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';
import NotFound from './UI/NotFound';
import SignupPage from './Components/Signup/SignupPage';
import 'react-toastify/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Signup/*" element={<SignupPage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
