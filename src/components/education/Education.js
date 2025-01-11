import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';

const Education = ({ degree, university, duration }) => {
    return (
        <section className={styles.education}>
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.educationDetails}>
                <span>{university}</span>
                <span>{duration}</span>
            </div>
            <p>
                <strong>{degree}</strong>
            </p>
        </section>
    );
};

Education.propTypes = {
    degree: PropTypes.string.isRequired,
    university: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
};

export default Education;
