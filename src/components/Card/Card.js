import React, { useRef } from 'react';
import Image from 'react-bootstrap/Image';
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

export const Card = () => {
  const scrollToElementRef = useRef(null);

  const scrollToElement = () => {
    if (scrollToElementRef.current) {
      scrollToElementRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  };
  return (
    <div>
      <div id='card'>


        <div>
          <Image src={logo} alt='Logo' rounded />
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
          <hr></hr>
          <div className='listGroup'>
            <ol>
              <li><FaFacebookF size={35} /></li>
              <li><GrLinkedinOption size={35} /></li>
              <li><BsInstagram size={35} /></li>
            </ol>
          </div>
        </div>

        <div id='cssToDiv'>
          <a  href='#'>Services</a>
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
          <div>
            <h2>UPI Payments</h2>
            <table>
              <tbody>
                <tr>
                  <td className='cssToTableInfo' ><h3>Google Pay Number  </h3></td>
                  <td className='cssToTableInfoCol'>:</td>
                  <td className='cssToTableInfoNextCol'>7588833768
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Bank Account</h2>
            <table>

              <tbody>
                <tr>
                  <td>Bank Name</td>
                  <td >:</td>
                  <td>Indusind</td>
                </tr>
                <tr>
                  <td>Branch Namer</td>
                  <td>:</td>
                  <td>Branch</td>
                </tr>
                <tr>
                  <td>IFSC Code</td>
                  <td>:</td>
                  <td>Ifsc</td>
                </tr>
                <tr>
                  <td>Bank City</td>
                  <td>:</td>
                  <td>Pune</td>
                </tr>
                <tr>
                  <td>Account Numer</td>
                  <td>:</td>
                  <td>201000524954</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>:</td>
                  <td>Current</td>
                </tr>
              </tbody>
            </table>
            <hr></hr>

          </div>

          <div ref={scrollToElementRef}>
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

      
    </div>
  )
}