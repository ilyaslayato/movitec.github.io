import React, { useState ,useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../style/Contact.css";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import Header from "./Header2";
// import Footer2 from "./Footer2";
const Contact = () => {
  const form = useRef();
  
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    company:"",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    if (name === "phone" && !/^\d{0,}-?\d{0,}-?\d{0,}$/.test(value)) {
      return; // ignore invalid input
    }
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    //email
    event.preventDefault();
    if (!data.name || !data.phone || !data.email || !data.company || !data.subject || !data.message){
      toast.error("Please fill in all fields.!");
    }
    else{
      emailjs.sendForm('service_yq6wufz', 'template_j7tucfi', form.current, 'O7rPexlALoVo2opX0')
      .then((result) => {
          console.log(result.text);
          console.log("ooooooook")
          toast.success("Message sent successfully!");
      }, (error) => {

          console.log(error.text);
          console.log("check emailjs , you have err")
      });
      axios.post('http://localhost:5000/api/contact', data)
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
    <Header />
      <section className='Contact' >
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Us</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                {/* <div className='img'>
                  <img src={contact1} alt='' />
                </div> */}
                <div className='details'>
                  <h1>Entreprise :</h1>

                  <p>Adress :355 Bd Ziraoui, Casablanca 20250</p> <br />
                  <p>tel: +212 522 20 12 16</p>
                  <p>Email:  support@moviflotte.com</p> <br />
                </div>
              </div>
            </div>

            <div className='right box_shodow'>

              <form ref={form} onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>VOTRE NOM</span>
                    <input type='text' name='name' value={data.name} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>TÉLÉPHONE </span>
                    <input type='tel' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
               
                <div className='input row'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input row'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input row'>
                  <span>ENTREPRISE </span>
                  <input type='text' name='company' value={data.company} onChange={InputEvent} />
                </div>
                <div className='input row'>
                  <span>VOTRE MESSAGE</span>
                  <textarea className="textarea" cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow' type="submit">
                ENVOYER MESSAGE
                </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
          
        </div>
      </section>
      {/* <Footer2 /> */}
    </>
  );
};

export default Contact;