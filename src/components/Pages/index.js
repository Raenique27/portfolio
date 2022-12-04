import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

function Pages({currentPage}) {
    const showPage = () => {
        switch (currentPage.name) {
            case 'about Me':
                return <About/>;
            case 'portfolio':
                return <Portfolio/>;
            case 'contact':
                return <Contact/>;
            case 'resume':
                return <Resume />;
            default: 
                return <About/>;
        }
    };

    return (
        showPage()
    );
}

export default Pages;