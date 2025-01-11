import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({email, linkedIn, location, nextChallenge, interests}) => {
    return (<header className={styles.header}>
        <h1 className={styles.headerTitle}>Anel Fernández</h1>
        <div className={styles.headerDetails}>
            <span>{email}</span>
            <span>|</span>
            <a
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.headerLink}
            >
                {linkedIn}
            </a>
            <span>|</span>
            <span>{location}</span>
        </div>
        <p className={styles.headerDescription}>
            {nextChallenge}
        </p>

        <p className={styles.headerDescription}>
            {interests}
        </p>
    </header>);
};

Header.propTypes = {
    email: PropTypes.string.isRequired,
    linkedIn: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    nextChallenge: PropTypes.string.isRequired,
    interests: PropTypes.string.isRequired,
};

export default Header;
