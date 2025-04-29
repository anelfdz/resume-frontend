import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react'
import styles from './Profile.module.css';

const Profile = ({profile}) => {
    const {isLoading, error, data} = useVisitorData(
        {extendedResult: true},
        {immediate: true}
    );

    useEffect(() => {
        if (isLoading) {
            console.log('Fingerprint is loading...');
        }
        if (data) {
            console.log('Fingerprint Data:', data);
        }
        if (error) {
            console.error('Fingerprint Error:', error);
        }
    }, [isLoading, data, error]);

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
