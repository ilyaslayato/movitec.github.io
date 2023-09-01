import React from 'react'
import "../style/AboutUs.css";
function AboutUs() {
  return (
    <section id='about'>
      
    <div className="container">
  

  <div className="gradient-cards">
    <div className="card">
      <div className="container-card bg-green-box">
        
        <p className="card-title">Aperçu *</p>
        <p className="card-description">Movitec est présente dans le domaine de la géolocalisation des flottes de véhicules par GPS à travers le produit Moviflotte.</p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-white-box">
        
        <p className="card-title">Movitec System *</p>
        <p className="card-description">Moviflotte est un système de Géolocalisation de véhicules et de gestion de flotte basé sur les technologies GPS et GSM/GPRS</p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-yellow-box">
        
        <p className="card-title">Comment fonctionne le système* <br /></p>
        <p className="card-description">Le système localise les véhicules <br /> de l’entreprise dans n’importe quelle partie du monde et à chaque instant.  </p>
      </div>
    </div>

    <div className="card">
      <div className="container-card bg-blue-box">
       
        <p className="card-title">Réalisations *</p>
        <p className="card-description">14 Ans d'expérience au Maroc <br />12.000 Unités installées <br /> + de 360Clients </p>
      </div>
    </div>
  </div>
</div>
<div>
<div className='pin'></div>
<div className='pulse'></div>
</div>
</section>
  )
}

export default AboutUs