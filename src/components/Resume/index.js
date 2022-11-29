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
        <section>
            <div>
                <div>
                    <div>
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr/>
                        <p>
                            Download my <a href={resume} download>resume</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;