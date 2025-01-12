import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ name, email, linkedIn, location, description }) => {
    return (
        <div className={styles['header-container']}>
            {/* Nombre */}
            <h1 className={styles['header-title']}>{name}</h1>

            {/* Contactos */}
            <div className={styles['header-links']}>
                <a
                    href={`mailto:${email}`}
                    className={styles['header-link']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {email}
                </a>
                <span className={styles['header-divider']}>|</span>
                <a
                    href={linkedIn}
                    className={styles['header-link']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {linkedIn}
                </a>
                <span className={styles['header-divider']}>|</span>
                <span>{location}</span>
            </div>

            {/* Descripción */}
            <div className={styles['header-description']}>
                {description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
};

Header.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
