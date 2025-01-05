import './App.css';
import Items from './Components/Items/Items.jsx';
import salebanner from "./assests/sale-campaign-banner-p8vzf.gif";
import Products from "./Components/ProductsOne/Products.jsx";


// Import Swiper React components


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules

import { Box } from '@mui/material';
import InfluencersVideos from './Components/InfluencersVideos/InfluencersVideos.jsx';
import Footer from './Components/Footer/Footer.jsx';
import OurService from './Components/OurService/OurService.jsx';
import BuyingReasons from './Components/BuyingReasons/BuyingReasons.jsx';
import BrandsAndReviews from './Components/BrandsAndReviews/BrandsAndReviews.jsx';
import Slider from './Components/Slider/Slider.jsx';
import Products2 from './Components/productTwo/ProductTwo.jsx';
import Products3 from './Components/productsThree/ProductsThree.jsx';
import Products4 from './Components/productsFour/productsFour.jsx';
import SellingProducts from './Components/SellingProducts/SellingProducts.jsx';


function App() {

  return (
    <Box style={{ backgroundColor: "#F1F3F6" }}>
      <Box>
        {/* Items Component */}
        <Items />
        <Slider />
        {/* Sale Banner */}
        <Box className="container mt-4">
          <img className="img-fluid bg-transparent" src={salebanner} alt="Sale Banner" />
        </Box>
        <Products />
      </Box>
      <InfluencersVideos />
      <SellingProducts />
      <Products2 />
      <Products3 />
      <BrandsAndReviews />
      <BuyingReasons />
      <Products4 />
      <OurService />
      <Footer />

    </Box>
  );
}

export default App;
