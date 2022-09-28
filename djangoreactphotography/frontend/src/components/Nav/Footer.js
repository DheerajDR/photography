import React from 'react';


import instagram from '../../images/instagram-logo.png';

function Footer() {
    return (
        <footer>
        <div className="icon-container">
           
            <a href="https://www.instagram.com/team_viper_mite/"><img src={instagram} className="noStopSteal" alt="Instagram logo"></img></a>
        </div>
        <p>Website and content © 2021 Team Viper</p>
    </footer>
    )
}

export default Footer;