import React, { useState } from 'react';
import myphoto from '../../assets/images/myphoto.png';
import { capitalizeFirstLetter } from '../../utils/helpers';
function About() {
    const [portfolioPages] = useState([
        {
            name: "about me"
        }
    ]);

    const [currentPage] = useState(portfolioPages[0]);
    return (
        <div className='masthead text-center text-white d-flex'>
            <div className='container my-auto'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto'>
                        <h1 className='text-white'>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <img src={myphoto} alt='Raenique Walters' style={{ width: '25%' }} />
                        <p className='text-white'>
                            I am an aspiring front end developer looking to put my full stack web developer knowledge to use. I love to create so being able to bring my creative mind to a team is something I believe to be very valuable. I hope to continue learning more about web development as well as sharpening and enhancing the knowledge that I have already acquired.
                            When I am not coding I spend my time painting, working out, traveling, and spending time with my friends and family.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;