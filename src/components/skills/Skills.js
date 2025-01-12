import React from 'react';
import PropTypes from 'prop-types';
import styles from './Skills.module.css';

const Skills = ({ skills }) => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skillsTitle}>Skills</h2>
            <div className={styles.skillsGrid}>
                {skills.map((skillCategory, index) => (
                    <div key={index} className={styles.skillRow}>
                        <div className={styles.category}>{skillCategory.category}</div>
                        <div className={styles.items}>{skillCategory.items.join(', ')}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

Skills.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            items: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Skills;
