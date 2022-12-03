import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [portfolioPages] = useState([
        {
            name:'portfolio'
        }
    ]);
    const [currentPage] = useState(portfolioPages[0]);
    const [project] = useState([
        {
            img: require('../../assets/images/portfolioProjects/booze-buddy.png').default,
            title: 'Booze-Buddy',
            description: 'JQuery, Font Awesome, Foundation Framework, TheCocktailDB API',
            repository: 'https://github.com/Raenique27/spirit-heroes',
            link: 'https://raenique27.github.io/spirit-heroes/'
        },
        {
            img: require('../../assets/images/portfolioProjects/run-buddy.png').default,
            title: 'Run-Buddy',
            description: 'HTML, CSS',
            repository: 'https://github.com/Raenique27/run-buddy',
            link: 'https://raenique27.github.io/run-buddy/'
        },
        {
            img: require('../../assets/images/portfolioProjects/weather-dashboard.png').default,
            title: 'Weather-Dashboard',
            description: 'OpenWeather API, Bootsrap, JQuery',
            repository: 'https://github.com/Raenique27/Weather-Dashboard',
            link: 'https://raenique27.github.io/Weather-Dashboard/'
        },
        {
            img: require('../../assets/images/portfolioProjects/wishagram.png').default,
            title: 'Wishagram',
            description: 'node.js, mysql2, express.js, express-session, express-handlebars, dotenv, bcrypt, sequelize, connect-session-sequelize',
            repository: 'https://github.com/pseudoDjnn/Wishagram',
            link: 'https://glacial-mesa-81435.herokuapp.com/'
        },
        {
            img: require('../../assets/images/portfolioProjects/workday-calendar-website copy.png').default,
            title: 'Workday-Calendar',
            description: 'HTML, CSS, Javascript',
            repository: 'https://github.com/Raenique27/Work-Day-Calendar',
            link: 'https://raenique27.github.io/Work-Day-Calendar/'
        }
    ]);


    return (
        <section className='p-0'>
            <div className='container-fluid p-0'>
                <h1 className='text-center margin-top'>{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className='my-4' />
                <div className='row pop-up-gallery no-gutters'>
                    {project.map((item, i) => (
                        <div key={i}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className='img-fluid'
                                style={{width:'40%'}}
                            />
                                {(<p {...item.description}>{item.description}</p>)}
                                {(<a href={item.repository}>Github Repo</a>)}
                                &nbsp; &nbsp; &nbsp;
                                {(<a href={item.link}>{item.title}</a>)}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;