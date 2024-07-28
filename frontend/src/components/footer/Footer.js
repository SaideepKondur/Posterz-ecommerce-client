import React from 'react';
import {AiOutlineLinkedin , AiOutlineGithub} from 'react-icons/ai'
import { CiLinkedin } from "react-icons/ci";
import './Footer.scss'
import creditCardImg from '../../assets/creditcardicons.png'
function Footer() {
  return (
    <footer className='Footer'>
        <div className="container">
            <container className="content">

                <div className="footer-left">
                    <h3 className="title">Follow us</h3>
                    <ul className="follow">
                        <li className="hover-link center">
                            <a href="https://www.linkedin.com/in/saideep-kondur/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin />
                            </a>
                        </li>
                        <li className="hover-link center">
                            <a href="https://github.com/SaideepKondur" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="footer-right">
                    <h3 className="title">Company</h3>
                    <ul className="company">
                        <li className="hover-link">Contact Us</li>
                        <li className="hover-link">Privacy Policy</li>
                        <li className="hover-link">Returns And Exchange Policy </li>
                        <li className="hover-link">Shipping Policy</li>
                        <li className="hover-link">Terms & Conditions</li>
                    </ul>
                </div>
            </container>

        </div>
        <div className="subfooter center">
            <div className="credit-card-img">
                <img src={creditCardImg} alt="credit card img" />
            </div>
            <p>Copyright {new Date().getFullYear()} © <strong>Posterz.</strong></p>
        </div>
    </footer>
  )
}

export default Footer


