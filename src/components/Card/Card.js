import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import logo from './Dream-icon.png';
import cardImage from './Card-image.jpg';
import digitalMarketingImage from './DigitalMarketingImage.jpg';
import seoImage from './SEOImage.jpg';
import eCommerce from './EcommerceImage.jpg';
import { IoCallSharp } from 'react-icons/io5';
import { BsWhatsapp } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaShareNodes } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
import './Card.css';
import { VscLocation } from 'react-icons/vsc'
import { BsGlobe } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
export const Card = () => {
  return (
    <div>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={logo} alt='Logo' rounded />
            <h1>Dreams International</h1>
            <ul>
              <li><IoCallSharp size={35} /></li>
              <li><BsWhatsapp size={35} /></li>
              <li><GrMail size={35} /></li>
              <li><FaShareNodes size={35} /></li>
            </ul>
            <div>
              <Button variant="primary">Add Contact</Button>{' '}
              <ol>
                <li><IoCallSharp size={35} /> 917588833768</li>
                <li><BsWhatsapp size={35} /> info@punedreams.com</li>
                <li><BsGlobe size={35} />www.dreamsinternational.in</li>
                <li><VscLocation size={35} />www.dreamsinternational.in
                  211, Paras Chambers,Above BOI, Near Laxminarayan Theatre, Pune 411009</li>
              </ol>
              <hr></hr>
              <div className='listGroup'>
                <ol>
                  <li><FaFacebookF size={35} /></li>
                  <li><GrLinkedinOption size={35} /></li>
                  <li><BsInstagram size={35} /></li>
                </ol>
              </div>
            </div>
            <div>
              <a href='#'>Services</a>
              <div className='cssToCard'>
                <h3>Website Design</h3>
                <img className='styleToImage' src={cardImage}></img>
                <button className='cssToEnquireButton'>Enquire</button>
              </div>



              <div className='cssToCard'>
                <h3>Digital Marketing</h3>
                <img className='styleToImage' src={digitalMarketingImage}></img>
                <button className='cssToEnquireButton'>Enquire</button>
              </div>
              <div className='cssToCard'>
                <h3>Ecommerce Website</h3>
                <img className='styleToImage' src={eCommerce}></img>
                <button className='cssToEnquireButton'>Enquire</button>
              </div>
              <div className='cssToCard'>
                <h3>Search Engine Optimization</h3>
                <img className='styleToImage' src={seoImage}></img>
                <button className='cssToEnquireButton'>Enquire</button>

              </div>
              <hr></hr>
              <div>
                <h2>UPI Payments</h2>
                <table>
                  <tbody>
                    <tr>
                      <td><h3>Google Pay Number</h3></td>
                      <td>:</td>
                      <td>7588833768
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>


            </div>
          </Col>
        </Row>
      </Container>





    </div>
  )
}