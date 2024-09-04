
import React from 'react'
import playstoreimg from "./FooterImg/24-243000_download-our-app-from-playstore.png"
import twitterImg from "./FooterImg/twitter.png"
import instagramImg from "./FooterImg/instagram.png"
import youtubeImg from "./FooterImg/youtube.png"
import applestoreimg from "./FooterImg/png-transparent-app-store-logo-iphone-app-store-google-play-apple-app-store-electronics-text-logo.png"
import "./footer.css"
const Footer = () => {
  return (
     <footer id='footer'>
        <div className='leftFooter'>
            <h4>DawnLoad out Apps</h4>
            <p>Downlaod our app from playstore or macstrore</p>
            <img src={playstoreimg} alt="Download App"/>
            <img src={applestoreimg} alt="Download App"/>
        </div>

        <div className='middleFooter'>
            <img  width="300px" src='https://res-console.cloudinary.com/dycjjaxsk/thumbnails/v1/image/upload/v1693332848/cHJvZHVjdHMvZG93bmxvYWRfanoxeWln/grid_landscape' />
            <p>High Quality is out priority</p>
            <p>Copyright 2023 &copy; Vishalshakya</p>
        </div>

        <div className='rightFooter'>
            <h4>Follow us</h4>
            <div className='flex-container'>
            <div className="socialIcon"><img src={twitterImg} alt="Download App"/></div>
            <div className="socialIcon"><img src={instagramImg} alt="Download App"/></div>
            <div className="socialIcon" ><img src={youtubeImg} alt="Download App"/></div>
            </div>
        </div>

     </footer>
  )
}

export default Footer