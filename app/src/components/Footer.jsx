import React from "react";
import { SiIfood } from "react-icons/si";

export default function footer() {
  return (
    <footer>
      <div className="title">
        <p>
         
          Follow us
          <SiIfood style={{marginLeft: '10px'}}/>
        </p>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_6-twitter-256.png"
          alt=""
          className="social-media-icons"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-2182/512/facebook__social__media__social_media__-256.png"
          alt=""
          className="social-media-icons"
        />
        <img
          src="https://cdn4.iconfinder.com/data/icons/social-media-2146/512/17_social-256.png"
          alt=""
          className="social-media-icons"
        />
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-256.png"
          alt=""
          className="social-media-icons"
        />
        <p className="address">© 2020 Copyright: chops.netlify.app</p>
        <p className="address">Contact Us: 484.627.9598</p>
        <p className="address">
          Located 1234 Fake Address St, Hello, World 01234
        </p>
      </div>
    
    </footer>
  );
}
