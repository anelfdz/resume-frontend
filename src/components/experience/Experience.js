import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';

const Experience = ({ experiences }) => {
    return (
        <section className={styles.experience}>
            <h2 className={styles.experienceTitle}>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} className={styles.experienceItem}>
                    <div className={styles.experienceHeader}>
                        <div>
                            <h3 className={styles.experiencePosition}>{experience.title}</h3>
                            <p className={styles.experienceLocation}>{experience.location}</p>
                        </div>
                        <p className={styles.experienceDuration}>{experience.duration}</p>
                    </div>
                    <ul className={styles.experienceResponsibilities}>
                        {experience.responsibilities.map((responsibility, i) => (
                            <li key={i} className={styles.experienceResponsibility}>
                                {responsibility}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

Experience.propTypes = {
    experiences: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired,
            responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Experience;
