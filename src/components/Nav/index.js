import React, {useEffect} from 'react';
import {capitalizeFirstLetter} from '../../utils/helpers';


function Nav (props) {
    const {
        portfolioPages = [],
        setCurrentPage,
        currentPage,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
            <div className='container'>
                <a href='/' className='navbar-brand js-scroll-trigger'>Raenique Walters</a>
                <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ml-auto'>
                        {portfolioPages.map((Page) => (
                            <li className={`nav-item nav-link js-scroll-trigger ${currentPage.name === Page.name && 'active'}`}
                            key={Page.name}>
                                <span onClick={() => setCurrentPage(Page)}>{capitalizeFirstLetter(Page.name)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;