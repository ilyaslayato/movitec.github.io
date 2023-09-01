import React from "react";
import "../style/Home.css";
import hero from "../img/abb909_41dddd5067994a118cb1868c1193dcbb_mv2.gif";
//https://codepen.io/chocokrizpis/pen/eYJQPoM
import "leaflet/dist/leaflet.css";
// import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import Solution from "./Solution";
import Map from "./Map";
// import Banner from "./Banner";
import Welcoom from "./Welcoom";

const Home = () => {
  return (
    <>
      <Header />
      <Welcoom />
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            
            <h1 className="h1-1">Un logiciel de suivi de la flotte</h1>
            
        
            <p className="p1">
              Système de gestion de flotte GPS innovant. Plus que le suivi d’une
              flotte de véhicules, La plateforme permet d’analyser l’activité
              sur le terrain grâce à des rapports, tableaux de bord et des
              alertes
            </p>
            <div className="hero_btn d_flex"></div>
          </div>
          <div className="right">
            <div className="right_img">
            <img src={hero} alt="" className="hero_image active" />
              {/* <img   className="hero_image"  src="" alt="" class="wp-image-24387"/> */}
            </div>
          </div>
        </div>
      </section>
      <Map />
    
      <AboutUs />
      <Solution />
      
     
      <Footer />
      
    </>
  );
};

export default Home;