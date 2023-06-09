
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';
import ReachUs from './components/ReachUs';
import OurStory from './components/OurStory';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import ScrollToTop from './helpers/ScrollToTop';

import FAQs from './components/faqs';
import TermsNConditions from './components/TermsNConditions';
import PrivacyPoicy from './components/PrivacyPoicy';
import CancellationNRefund from './components/CancellationNRefund';
import ContactPage from './components/ContactPage';
import Aim from './components/Aim';
import Vision from './components/Vision';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar/>
      <ScrollToTop />
      <Routes>


      <Route path="/home/:roomtype" element={<Homescreen/>} />
      <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>} />
      <Route path="/register" element={<Registerscreen/>} />
      <Route path="/login" element={<Loginscreen/>} />
      <Route path="/profile" element={<Profilescreen/> } />
      <Route path="/admin" element={<Adminscreen/> } />
      <Route path="/" element={<Landingscreen/> } />
      <Route path="/reachus" element={<ReachUs/> } />
      <Route path="/ourstory" element={<OurStory/> } />
      <Route path="/services" element={<OurServices/> } />
      <Route path="/faqs" element={<FAQs/> } />
      <Route path="/tncs" element={<TermsNConditions/> } />
      <Route path="/privacypolicy" element={<PrivacyPoicy/> } />
      <Route path="/cancellation" element={<CancellationNRefund/> } />
      <Route path="/contactus" element={<ContactPage/> } />
      <Route path="/aim" element={<Aim/> } />
      <Route path="/vision" element={<Vision/> } />

      </Routes>
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
