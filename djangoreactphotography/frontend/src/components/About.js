import React from 'react';
import Megan from '../images/megan.jpg'

function About() {
    return (
        <div className="About">
            <img src={Megan} alt="Headshot of the photographer, Megan" className="image-shadow noStopSteal"></img>
            <h1>About the Team</h1>
            <p>
                TEAM VIPER started there photography journey at the age of 8, focusing there camera on
                butterflies. There first camera was a nikon,
                and it got them hooked on capturing any and every insect they saw. They now
                shoots photos with a Canon EOS 700D (Rebel T5i) with various lens kits.
                They has greatly expanded from ther usual butterfly shots to include plants,
                animals, landscapes, and even the occasional building.
            </p>
            <p>
                You can also download images from unsplash website.
                to download 
                
                <a href="https://unsplash.com/"> click here </a>.
            </p>
            <p>
                Currently, TEAM VIPER is a freelance web developer, and we built this site
                using Django and React.  In addition, you can 
                view her code on Github, 
                including <a href="https://github.com/DheerajDR"> the code that went into 
                this website</a>!
            </p>
        </div>
    );
}

export default About;