import React from 'react';

function Footer() {
    const icons = [
        {
            name: 'fab fa-github',
            link: 'https://github.com/Raenique27'
        },
        {
            name: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/raenique-walters-78922b1a5'
        }
    ]
    return (
        <section>
            <footer>
                <div>
                    {icons.map(icon => (
                        <a href={icon.link} key={icon.name} target="_blank" rel='noopener noreferrer'><i className={icon.name}></i></a>
                    ))}
                </div>
            </footer>
        </section>
    );
}

export default Footer;