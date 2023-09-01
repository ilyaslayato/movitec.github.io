
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


// import AboutUs from './component/AboutUs';
// import Contact from './component/Contact';
import Demand from './component/Demand';
// import  Footer  from './component/Footer';
// import Header from './component/Header';
import Home from './component/Home';
import Contact from './component/Contact';
import NotFound from './component/NotFound';
import Loading from './component/Loading';
// import { useEffect, useState } from 'react';

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demand" element={<Demand />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppWidget 
        phoneNumber="+212777680782"
        message="Hello, this is Movitec Support , how can we help you ?"
        position="right"
      />
    </>
  );
}

export default App;
