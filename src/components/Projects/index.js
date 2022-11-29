import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Projects({ project }) {
    const { name, description, repository, link } = project;

    return (
        <div className='col-lg-4 col-sm-6'>
            <div className='project-portfolio' key={name}>
                <img src={require(`../../assets/images/${name}.png`)} alt={removeHyphensAndCapitalize(name)} className='img-fluid' />
                <div className='project-box'>
                    <div className='project-box-content'>
                        <p className='project-name'>{description}</p>
                        <br/>
                        <a href={repository} className='project-info text-faded'><i className='fab fa-github'></i></a>
                        <a href={link} className='project-info text-faded'>{removeHyphensAndCapitalize(name)}</a> {' '}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;