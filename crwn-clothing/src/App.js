
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Contact from './component/contact/contact.component';
import Brand from './component/Brand/Brand.component';
import Sale from './component/sale/sale.component';
import NewArrivals from './routes/new-arrivals/new-arrivals.component';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SignupFooter from './component/signup-footer/signup-footer.component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PerfumeSimple from './routes/perfumesimple/perfumesimple.component';
import ProductDetail from './component/productdetail/productdetail.component';
import MyAccount from './component/myaccount/myaccount.component';
const App = () => {
 

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Brand" element={<Brand />} />
        <Route path='Sale' element={<Sale />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/perfumesimple" element={<PerfumeSimple/>} />
        <Route path="/product/:cat/:name" element={<ProductDetail />} /> 
        <Route path="/myaccount" element={<MyAccount />} />
      </Route>
    </Routes>
    
  );
};

export default App;