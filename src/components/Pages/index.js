import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';

function Pages({currentPage}) {
    const showPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About/>;
            case 'portfolio':
                return <Portfolio/>;
            default: 
                return <About/>;
        }
    };

    return (
        <section>

        </section>
    );
}

export default Pages;