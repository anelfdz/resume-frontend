import React, {useEffect, useState} from 'react';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import Skills from '../components/skills/Skills';
import Education from '../components/education/Education';
import Experience from '../components/experience/Experience';
import Awards from '../components/awards/Awards';
import {fetchResumeData} from '../api/resumeApi';
import './Resume.module.css';

const Resume = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchResumeData();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
                <Header
                    name={data.header.name}
                    email={data.header.email}
                    linkedIn={data.header.linkedIn}
                    location={data.header.location}
                    summary={data.header.summary}
                    description={data.header.description}
                />

                <Profile profile={data.profile}/>

                <Skills skills={data.skills}/>

                <Experience experiences={data.experiences}/>

                <Education
                    degree={data.education.degree}
                    university={data.education.university}
                    duration={data.education.duration}
                />

                <Awards awards={data.awards}/>
            </div>
        </div>
    );
};

export default Resume;
