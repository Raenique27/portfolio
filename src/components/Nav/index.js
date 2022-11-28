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
        <nav>
            <div>
                <a href='/'>Raenique Walters</a>
                <button>
                    <span></span>
                </button>
                <div>
                    <ul>
                        {portfolioPages.map((Page) => (
                            <li className={`${currentPage.name === Page.name && 'active'}`}
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