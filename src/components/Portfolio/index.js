import React, {useState} from 'react';
import Projects from '../Projects';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
    const [portfolioPages] = useState([
        {
            name: 'portfolio'
        }
    ]);

    const [currentPage] = useState(portfolioPages[0]);
    const [projects] = useState([
        {
            name: 'booze-buddy',
            description: 'JQuery, Font Awesome, Foundation Framework, TheCocktailDB API',
            repository: 'https://github.com/Raenique27/spirit-heroes',
            link: 'https://raenique27.github.io/spirit-heroes/'
        },
        {
            name: 'run-buddy',
            description: 'HTML, CSS',
            repository: 'https://github.com/Raenique27/run-buddy',
            link: 'https://raenique27.github.io/run-buddy/'
        },
        {
            name: 'weather-dashboard',
            description: 'OpenWeather API, Bootsrap, JQuery',
            repository: 'https://github.com/Raenique27/Weather-Dashboard',
            link: 'https://raenique27.github.io/Weather-Dashboard/'
        },
        {
            name: 'wishagram',
            description: 'node.js, mysql2, express.js, express-session, express-handlebars, dotenv, bcrypt, sequelize, connect-session-sequelize',
            repository: 'https://github.com/pseudoDjnn/Wishagram',
            link: 'https://glacial-mesa-81435.herokuapp.com/'
        },
        {
            name: 'workday-calendar',
            description: 'HTML, CSS, Javascript',
            repository: 'https://github.com/Raenique27/Work-Day-Calendar',
            link: 'https://raenique27.github.io/Work-Day-Calendar/'
        }
    ]);

    return (
        <section className='p-0'>
            <div className='container-fluid p-0'>
                <h1 className='text-center margin-top'>{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className='my-4'/>
                <div className='row pop-up-gallery no-gutters'>
                    {projects.map((project, i) => (
                        <Projects project={project} key={'project' + i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;