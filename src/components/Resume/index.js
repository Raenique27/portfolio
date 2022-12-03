import React, {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import resume from '../../assets/images/resume/raeniqueResume.pdf';

function Resume() {
    const [portfolioPages] = useState([
        {
            name: 'resume'
        }
    ]);
    const [currentPage] = useState(portfolioPages[0]);
    return (
        <section className='bg-dark'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto text-white mb-4'>
                        <h1 className='text-center'>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr className='light my-4'/>
                        <p className='text-center'>
                            Download my <a href={resume} className='text-faded white-link' download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;