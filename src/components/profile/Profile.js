import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({profile}) => {
    return (
        <section className={styles.profile}>
            <h2 className={styles.profileTitle}>Profile</h2>
            <ul className={styles.profileList}>
                {profile.description.map((line, index) => (
                    <li key={index} className={styles.profileItem}>
                        {line}
                    </li>
                ))}
            </ul>
        </section>
    );
};

Profile.propTypes = {
    profile: PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default Profile;
