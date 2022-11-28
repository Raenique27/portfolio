import React from 'react';
import myphoto from '../../assets/images/myphoto.png'
function About() {
    return (
        <section>
            <h1 id='about'>About Me</h1>
            <img src={myphoto} style={{ width: '25%'}} alt='Raenique Walters headshot'/>
            <p>
                 I am an aspiring front end developer looking to put my full stack web developer knowledge to use. I love to create so being able to bring my creative mind to a team is something I believe to be very valuable. I hope to continue learning more about web development as well as sharpening and enhancing the knowledge that I have already acquired. 
                When I am not coding I spend my time painting, working out, traveling, and spending time with my friends and family.
            </p>
        </section>
    );
}

export default About;