import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [portfolioPages] = useState([
        {
            name: 'contact'
        }
    ]);

    const [currentPage] = useState(portfolioPages[0]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <div>
                <div>
                    <div>
                        <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
                        <hr />
                        <form id='contact-form' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='name'>Name:</label>
                                <input placeholder='Name' type='text' name='name' defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor='email'>Email address:</label>
                                <input placeholder='Email' type='email' name='email' defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor='message'>Message:</label>
                                <textarea placeholder='Message' name='message' rows='5' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p>{errorMessage}</p>
                                </div>
                            )}
                            <div>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;
