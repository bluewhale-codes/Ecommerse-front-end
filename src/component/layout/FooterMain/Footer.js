import React from 'react'
import "./footer.css"
import playstoreimg from "./FooterImg/24-243000_download-our-app-from-playstore.png"
import twitterImg from "./FooterImg/twitter.png"
import instagramImg from "./FooterImg/instagram.png"
import youtubeImg from "./FooterImg/youtube.png"
import applestoreimg from "./FooterImg/png-transparent-app-store-logo-iphone-app-store-google-play-apple-app-store-electronics-text-logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className='footer-container'>
         <div className='footer-link-section'>
                <div>
                    <p className='footer-heading'>online shopping</p>
                    <ul>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>WOmen</a></li>
                        <li><a href='#'>Kids</a></li>
                        <li><a href='#'>Home and living</a></li>
                        <li><a href='#'>Top Brands </a></li>
                        <li><a href='#'>Electronics</a></li>
                    </ul>
                </div>
                <div>
                    <p className='footer-heading'>customer policies</p>
                    <ul>
                        <li><a href='#'>Men</a></li>
                        <li><a href='#'>WOmen</a></li>
                        <li><a href='#'>Kids</a></li>
                        <li><a href='#'>Home and living</a></li>
                        <li><a href='#'>Top Brands collection</a></li>
                        <li><a href='#'>Electronics</a></li>
                    </ul>
                </div>
         </div>
         <div className='promotion-section'>
            <p className='footer-heading'>EXPERIENCE OUR APP ON MOBILE</p>
            <div className='images-logo'>
                <div>
                <img src={playstoreimg} alt="Download App"/>
                </div>
                <div>
                 <img src={applestoreimg} alt="Download App"/>
                </div>
            </div>
            <p className='footer-heading'>Keep in touch</p>
             <div className='socialLink-container'>
                <div className="socialIcon"><img src={twitterImg} alt="Download App"/></div>
                <div className="socialIcon"><img src={instagramImg} alt="Download App"/></div>
                <div className="socialIcon" ><img src={youtubeImg} alt="Download App"/></div>
             </div>

         </div>
         <div className='gaurentee-section'>
            <div className='guarntee'>
                <div className='image-gaunetee'>
                <img src='https://e7.pngegg.com/pngimages/472/104/png-clipart-computer-icons-logo-100-guaranteed-text-monochrome.png'/>
                </div>
                <div>
                <p><strong>100% origanal</strong> for all products at bluewhalestore.com</p>
                </div>
            </div>
            <div className='guarntee'>
                <div className='image-gaunetee'>
                <img src='https://pilotworld.fi/wp-content/uploads/2018/06/returns.png'/>
                </div>
                <div>
                <p><strong>Return within 14days</strong> of receiving your order</p>
                </div>
            </div>

         </div>
    </div>
    </footer>
  )
}

export default Footer