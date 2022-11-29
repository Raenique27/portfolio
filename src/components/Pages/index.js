import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Content from '../Content';
import Contact from '../Contact';
import Resume from '../Resume';

function Pages({currentPage}) {
    const showPage = () => {
        switch (currentPage.name) {
            case 'about me':
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
        <section>
            <Content>{showPage()}</Content>
        </section>
    );
}

export default Pages;