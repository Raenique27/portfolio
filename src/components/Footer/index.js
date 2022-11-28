import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GithubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer>
            <div>
                <a href='https://github.com/Raenique27'>
                    <GithubIcon/>
                </a>

                <a href='https://www.linkedin.com/in/raenique-walters-78922b1a5'>
                    <LinkedInIcon/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;