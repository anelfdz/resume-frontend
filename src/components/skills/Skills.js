import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skillsTitle}>Skills</h2>
            <ul className={styles.skillsList}>
                <li className={styles.skillsItem}>
                    <strong>Cloud & Platforms:</strong> AWS, Google Cloud, Azure, Kubernetes, Docker, microservices, reactive programming,
                    REST APIs, gRPC, GraphQL.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Large-Scale Systems:</strong> Design, deployment, and operation of large-scale distributed
                    systems and event-driven architectures, leveraging Apache Spark, Apache Beam, Spring Cloud, Pub/Sub,
                    and Change Data Capture (CDC) patterns.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Databases:</strong> Casandra, Bigtable, DynamoDB, PostgreSQL, MySQL.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Programming Languages:</strong> Java, Go, Rust, Python, Kotlin, Swift, C++, C#, HTML,
                    JavaScript, PHP, Bash.
                </li>
                <li className={styles.skillsItem}>
                    <strong>CI/CD & SCM:</strong> Jenkins, GitLab, BitBucket, GitHub, Git.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Performance & Optimization:</strong> Caching strategies, latency optimization, and
                    high-throughput data processing, achieving up to 1M updates per minute and data serialization
                    optimization with FlatBuffers.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Security & Compliance:</strong> OAuth 2.0, PKI, TLS/SSL. Experienced in securing APIs and
                    systems for large-scale enterprise environments.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Leadership:</strong> Cross-functional team management, mentorship, and large-scale
                    refactoring initiatives, driving a 20% boost in team productivity.
                </li>
                <li className={styles.skillsItem}>
                    <strong>Spoken Languages:</strong> Fluent in English and Spanish.
                </li>
            </ul>
        </section>
    );
};

export default Skills;
