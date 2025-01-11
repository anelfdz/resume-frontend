import React from 'react';
import PropTypes from 'prop-types';
import styles from './Awards.module.css';

const Awards = ({ awards }) => {
    return (
        <section className={styles.awards}>
            <h2 className={styles.awardsTitle}>Awards</h2>
            <ul className={styles.awardsList}>
                {awards.map((award, index) => (
                    <li key={index} className={styles.awardItem}>
                        <h3 className={styles.awardTitle}>{award.title}</h3>
                        <p className={styles.awardDescription}>{award.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Awards.propTypes = {
    awards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Awards;
