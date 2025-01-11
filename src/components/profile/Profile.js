import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <section className={styles.profile}>
            <h2 className={styles.profileTitle}>Profile</h2>
            <ul className={styles.profileList}>
                <li className={styles.profileItem}>
                    BS in Computer Science, University of Informatic Sciences, Cuba.
                </li>
                <li className={styles.profileItem}>
                    10+ years in software development, with expertise in large-scale distributed systems, cloud
                    computing, and system design.
                </li>
                <li className={styles.profileItem}>
                    5+ years in technical leadership, managing cross-functional teams of 100+ engineers across multiple
                    geographies.
                </li>
                <li className={styles.profileItem}>
                    7+ years optimizing performance, implementing caching, and developing scalable solutions for
                    high-demand environments.
                </li>
                <li className={styles.profileItem}>
                    Proven track record in cloud-native architectures, event-driven systems, and feature delivery
                    acceleration using Agile methodologies.
                </li>
            </ul>
        </section>
    );
};

export default Profile;
