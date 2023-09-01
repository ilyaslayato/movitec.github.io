import React from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../style/Footer.css';

// Import language files
// import englishData from '../languges/english.json';
// import frenchData from '../languges/french.json';
// import arabicData from '../languges/arabic.json';

const Footer2 = () => {
  // const [language, setLanguage] = useState('english');

  // const handleChangeLanguage = (e) => {
  //   setLanguage(e.target.value);
  // };


  // let languageData;
  // if (language === 'arabic') {
  //   languageData = arabicData;
  // } else if (language === 'french') {
  //   languageData = frenchData;
  // } else {
  //   languageData = englishData;
  // }

  return (
    <footer className="footer">
      
    <div className="container">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />
    
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<div id='stars3'></div>

<div id='stars'></div>
<div id='stars'></div>




      <div className="row">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
           
            <li><a href="/demand" className='a1'>Demande de vie</a></li>
            <li><a href="/contact" className='a1'>Contact</a></li>
            <li><a href="/" className='a1'>Home</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <div className='social-links'>
            <a className='a1' href="https://maps.google.com/maps?q=3%C3%A8me%2B%C3%A9tage%2C%2B355%2BBd%2BZiraoui%2C%2BCasablanca%2B20250%2C%2BMaroc&sll=33.59296073858576,-7.636752686579058"><i className="fas fa-map-marked"></i></a>
            <a className='a1' href="tel:+212522201216"><i className="fas fa-phone-square"></i></a>
            <a  className='a1' href="mailto:support@moviflotte.com"><i className="far fa-envelope"></i></a>
            {/* <a href="#"><i className="fab fa-linkedin-in"></i></a> */}
          </div>
        </div>
        <div className="footer-col">
          <h4>follow us</h4>
          <div className='social-links'>
          <a href="#" className='a1'><i className="fab fa-facebook-f"></i></a>
          <a href="#" className='a1'><i className="fab fa-twitter"></i></a>
            <a href="#" className='a1'><i className="fab fa-instagram"></i></a>
            <a href="#" className='a1'><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

  );
};

export default Footer2;