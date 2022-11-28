import React from 'react';
import myphoto from '../../assets/images/myphoto.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
function About() {
    return (
        <Card className='container' component='section' elevation={6}>
            <CardContent className='about-content'>
                <h1>About Me</h1>
                <CardMedia component='img' image={myphoto} alt='Raenique Walters' className='my-photo' />
                <p>
                    I am an aspiring front end developer looking to put my full stack web developer knowledge to use. I love to create so being able to bring my creative mind to a team is something I believe to be very valuable. I hope to continue learning more about web development as well as sharpening and enhancing the knowledge that I have already acquired.
                    When I am not coding I spend my time painting, working out, traveling, and spending time with my friends and family.
                </p>
            </CardContent>
        </Card>
    );
}

export default About;