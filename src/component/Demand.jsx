import React, { useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import '../style/Demand.css';
import Header2 from "./Header2";
import emailjs from '@emailjs/browser';
import Footer2 from "./Footer2";
const Demand = () => {
  const form = useRef();
  
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    number: "",
    message: "",
  });

 
  const InputEvent = (event) => {
    const { name, value } = event.target;
    if (name === "phone" && !/^\d{0,}-?\d{0,}-?\d{0,}$/.test(value)) {
      return; // ignore invalid input
    }
    if (name === "number" && !/^\d*\.?\d{0,1}$/.test(value)) {
      return; // ignore invalid input
    }
    
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    //email
    event.preventDefault();
    if (!data.name || !data.phone || !data.email || !data.company || !data.number || !data.message){
      toast.error("Please fill in all fields.!");
    }
    else{
      emailjs.sendForm('service_yq6wufz', 'template_i4hduor', form.current, 'O7rPexlALoVo2opX0')
      .then((result) => {
          console.log(result.text);
          console.log("ooooooook")
          toast.success("Message sent successfully!");
      }, (error) => {

          console.log(error.text);
          console.log("check emailjs , you have err")
      });
      axios.post('http://localhost:5000/demand', data)
      .then((response) => {
        console.log(response);
        console.log("insert to database done")
        // toast.success("insert to database done  ");
      })
      .catch((error) => {
        console.log(error);
        console.log("server not working")
        // toast.error('An error occurred while submitting the form. Please try again.');
      });

    }
   

   
  };
  return (
    <>
    <Header2 />
      <section className='contact-section1'>
        <div className='container1'>
          <div className='heading text-center1'>
            <h1 className="h1-2">Demand devie</h1>
          </div>

          <div className='content1'>
            <div className='form-wrapper1'>
              <form ref={form} onSubmit={formSubmit} className="form1" >
                <div className='form-row1'>
                  <div className='form-group1'>

                    <label className="label1" htmlFor='name'>VOTRE NOM</label>
                    <input className='form-control1' type='text' name='name' value={data.name} onChange={InputEvent} />
                  </div>
                  <div className='form-group1'>
                    <label className="label1" htmlFor='phone'>TÉLÉPHONE</label>
                    <input className='form-control' type='tel' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='form-group'>
                  <label className="label1" htmlFor='email'>EMAIL</label>
                  <input className='form-control' type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='form-group'>
                  <label className  ="label1" htmlFor='number'>NUMÉRO DE VÉHICULE</label>
                  <input className='form-control' type='number' name='number' value={data.number} onChange={InputEvent} />
                </div>
                <div className='form-group'>
                  <label className="label1" htmlFor='company'>ENTREPRISE</label>
                  <input className='form-control' type='text' name='company' value={data.company} onChange={InputEvent} />
                </div>
                <div className='form-group'>
                  <label className="label1" htmlFor='message'>VOTRE MESSAGE</label>
                  <textarea className='textarea1' cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn' type='submit'>
                ENVOYER  MESSAGE
                </button>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default Demand;