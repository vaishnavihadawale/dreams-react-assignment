import React, { useRef } from 'react';
import logo from './Dream-icon.png';
import cardImage from './Card-image.jpg';
import digitalMarketingImage from './DigitalMarketingImage.jpg';
import seoImage from './SEOImage.jpg';
import eCommerce from './EcommerceImage.jpg';
import { IoCallSharp } from 'react-icons/io5';
import { FaListAlt } from 'react-icons/fa';
import { FaAddressBook } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6'
import { BsWhatsapp } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaShareNodes } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import './Card.css';
import { VscLocation } from 'react-icons/vsc';
import { BsGlobe } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Card = () => {
  const scrollToElementRef = useRef(null);

  const scrollToElement = () => {
    if (scrollToElementRef.current) {
      scrollToElementRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };
  return (
    <div>
      <Container id="cssToContainer">
        <Row>
          <Col md={{ span: 4, offset: 4 }} sm={{ span: 6, offset: 3 }}>

            <div id='card'>


              <div>
                <div id='divImage'>
                  <img src={logo} alt='logo'></img>
                </div>
                <h1>Dreams International</h1>
                
                <ul>
                  <li><IoCallSharp size={35} /></li>
                  <li><BsWhatsapp size={35} /></li>
                  <li><GrMail size={35} /></li>
                  <li><FaShareNodes size={35} /></li>
                </ul>
                
              </div>
              <div id='cssToInfo'>
                <button id='cssToAddContact'>Add Contact</button>
                <div className='tableDiv'>
                  <table>
                    <tbody>
                      <tr className='cssToRow'>
                        <td className='cssToTableData'><IoCallSharp size={35} /></td>
                        <td className='cssToTableDataText'>917588833768</td>
                      </tr>
                      <tr className='cssToRow'>
                        <td className='cssToTableData'><BsWhatsapp size={35} /></td>
                        <td className='cssToTableDataText'>info@punedreams.com</td>
                      </tr>
                      <tr className='cssToRow'>
                        <td className='cssToTableData'><BsGlobe size={35} /> </td>
                        <td className='cssToTableDataText'>www.dreamsinternational.in</td>
                      </tr>
                      <tr className='cssToRow'>
                        <td className='cssToTableData'><VscLocation size={45} /></td>
                        <td className='cssToTableDataText '>211,Paras Chambers,Above BOI, Near Laxminarayan Theatre, Pune 411009</td>
                      </tr>


                    </tbody>
                  </table>
                </div>
                <hr id="horizontalRow"></hr>
                <div className='listGroup'>
                  <ol>
                    <li><FaFacebookF size={35} /></li>
                    <li><GrLinkedinOption size={35} /></li>
                    <li><BsInstagram size={35} /></li>
                  </ol>
                </div>
              </div>

              <div id='cssToDiv'>
                <a href='#'>Services</a>
              </div>
              <div className='cssToCard'>
                <h3>Website Design</h3>
                <img className='styleToImage' src={cardImage}></img>
                <button onClick={scrollToElement} className='cssToEnquireButton'>Enquire</button>
              </div>



              <div className='cssToCard'>
                <h3>Digital Marketing</h3>
                <img className='styleToImage' src={digitalMarketingImage}></img>
                <button onClick={scrollToElement} className='cssToEnquireButton'>Enquire</button>
              </div>
              <div className='cssToCard'>
                <h3>Ecommerce Website</h3>
                <img className='styleToImage' src={eCommerce}></img>
                <button onClick={scrollToElement} className='cssToEnquireButton'>Enquire</button>
              </div>
              <div className='cssToCard'>
                <h3>Search Engine Optimization</h3>
                <img className='styleToImage' src={seoImage}></img>
                <button onClick={scrollToElement} className='cssToEnquireButton'>Enquire</button>

              </div>
              <hr></hr>
              <div id='cssToDivSecond'>
                <h2>UPI Payments</h2>

                <div className='gpayNumber'>
                  <p>Google Pay Number : 7588833768</p>

                </div>
              </div>
              <h2>Bank Account</h2>
              <div>
                <div className='bankInfo'>
                <p>Bank Name    : Indusind</p>
              </div>
              <div className='bankInfo'>
                <p>Branch Namer	:	Branch</p>
              </div>
              <div className='bankInfo'>
               <p> IFSC Code : Ifsc</p>
              </div>
              <div className='bankInfo'>
                <p> Bank City : Pune</p>
                
              </div>
              <div className='bankInfo'>
                <p>Account Number : 201000524954</p>
              </div>
              <div className='bankInfo'>
                <p>Account Type : Current</p>
              </div>
              

              </div>
              <hr></hr>



              <div id="cssToThirdDiv" ref={scrollToElementRef}>
                <h2>Enquiry Form</h2>
                <form>
                  <input type='text' placeholder='Enter Name'></input><br></br>
                  <input type='tel' placeholder='Enter Mobile'></input><br></br>
                  <input type='email' placeholder='Enter Email'></input><br></br>
                  <div className='input'>
                    <input className='cssToInput' type='text' placeholder='Enter Enquiry Details'></input><br></br>
                  </div>
                  <button className='cssToSendButton'>Send</button>

                </form>
              </div>
              <div id='cssToReference'>
              <p>
                  <p id='cssToWeb'>@ 2023 www.cardmonk.com</p>
                  <a id="cssToAnchor" href='https://www.cardmonk.com/'>Create Your Own. It's Free</a>
                </p>
              </div>




              <footer>
                <ul>
                  <li><a><FaListAlt size={35} /></a></li>
                  <li><a><FaCreditCard size={35} /></a></li>
                  <li><a><FaAddressBook size={35} /></a></li>
                </ul>
              </footer>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}