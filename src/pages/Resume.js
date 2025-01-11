import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import Profile from '../components/profile/Profile';
import Skills from '../components/skills/Skills';
import Experience from '../components/experience/Experience';
import Education from '../components/education/Education';
import Awards from '../components/awards/Awards';
import './Resume.module.css';

const Resume = () => {
    useEffect(() => {
        document.title = "Resume - Anel Fernández";
    }, []);

    const experiences = [
        {
            title: "Senior Staff Engineer, Mercado Libre",
            duration: "Jan 2023 – Present",
            location: "Las Condes, Chile",
            responsibilities: [
                "Optimized a key attribution process, reducing execution time by 80% (4 hours to 45 minutes) and enabling multiple daily runs. Led improvements using Java 17, Apache Spark, AWS EMR, and Parquet, including halving the conversion event evaluation window (30 to 15 days) and adopting graph-based algorithms for efficient data handling. Enhanced resilience reduced incidents from twice weekly to 1-2 per month, boosting marketing efficiency and increasing GMV by 1.2%.",
                "Redesigned Ads catalog publishing system, cutting operational costs by 40%, improving uptime to 99.99%, saving over 150K USD monthly, and boosting GMV by 2.3%. Led a refactor using Go, Redis, DynamoDB, Pub/Sub, and CDC patterns, implementing an audit system to efficiently sync catalogs and reduce reprocessing times from 4 hours to under 15 minutes during peak events like Black Friday. Enhanced system reliability and reduced redundant operations with an event registry, minimizing errors and optimizing marketing investments.",
                "Designed and implemented a Social Commerce capability, enabling 10+ teams to integrate social media profiles and content with Mercado Libre’s platform. Leveraged Java, DynamoDB, Apache Beam, and the Adapter pattern to build a scalable, event-driven solution that abstracts network-specific complexities. Facilitated cross- functional alignment by coordinating with VPs, Directors, and stakeholders through non-abstract large system design sessions and PRDs, ensuring clarity and buy-in. Delivered a solution adopted by 120+ creators, generating 70K videos with 10M+ views in two months and boosting sales by 6% across platforms.",
                "Engineered a video ad integration system for Meta and TikTok, processing over 1M updates per minute with sub-second latency. Built using Go, DynamoDB, and Pub/Sub, the solution addressed critical latency issues, ensuring real-time synchronization of ads and increasing GMV by 5%. This scalable innovation is now a core capability leveraged by four business units."
            ]
        },
        {
            title: "Staff Engineer, Mercado Libre",
            duration: "Jan 2022 - Jan 2023",
            location: "Las Condes, Chile",
            responsibilities: [
                "Increased team productivity by 20% by conducting performance reviews and leading technical mentorship for 100+ engineers. Focused on growth and leadership development, directly enabling five team members to be promoted to senior engineering roles, and fostering a high-performance culture across multidisciplinary teams.",
                "Drove technical evolution by implementing caching (Redis), disaster recovery tests (AWS DRS, Netflix Chaos Monkey), and refactoring internal service SDKs (Java, Go, Python), reducing build times by 40% and downtime by 10%. Spearheaded the adoption of large-scale refactoring tools, accelerating feature delivery by 15% and enhancing system resilience for high-demand environments.",
                "Implemented a real-time data synchronization system for large-scale distributed systems using Apache Kafka, Apache Beam, and Google Cloud Pub/Sub, reducing data latency by 40% and enhancing system reliability."
            ]
        },
        {
            title: "Technical Leader, Mercado Libre",
            duration: "Jul 2020 - Jan 2022",
            location: "Las Condes, Chile",
            responsibilities: [
                "Led senior teams with a focus on mentorship and growth, resulting in 8% of team members being promoted and an increase in team performance by 17%.",
                "Led transformation of traditional processes into transactional models using Java and Spring Boot, resulting in a 30% increase in monthly profits for large-scale financial systems.",
                "Solved high infrastructure costs issue by redesigning core APIs using Java 17, Spring Boot & Webflux, resulting in 70% cost reduction and enhanced system reliability."
            ]
        },
        {
            title: "Senior Software Engineer, Mercado Libre",
            duration: "Apr 2019 - Jul 2020",
            location: "Las Condes, Chile",
            responsibilities: [
                "Designed server-side rendering architecture for multi-platform versioning using Java for backend side and React for frontend side, addressing scalability issues and reducing maintenance overhead by 30%.",
                "Led data serialization optimization for large-scale map search system for mobile apps, enhancing processing speeds by 50% and reducing memory usage by 50% with FlatBuffers, resulting in improved system efficiency and cost savings.",
                "Developed a high-performance, scalable, and fault-tolerant search system for mobile apps using Java, Apache Lucene, and Redis, resulting in a 20% increase in search accuracy and a 10% boost in sales.",
            ]
        },
        {
            title: "Senior Android Developer, Mercado Libre",
            duration: "Oct 2018 - Apr 2019",
            location: "Las Condes, Chile",
            responsibilities: [
                "Led development and optimization of high-traffic banking app using Java and Kotlin, established rigorous quality standards that reduced bugs by 10%, enhancing user experience and boosting app ratings.",
                "Initiated and led programming contests, enhancing algorithmic and problem-solving capabilities across 5 teams, resulting in a 30% increase in code efficiency and a 20% reduction in bug rates."
            ]
        }
    ];

    const awards = [
        {
            title: "Gold Medalist in the National Mathematics Olympiad for University Students (2013)",
            description: "Competed against 500+ participants nationwide, showcasing my strong problem-solving and analytical abilities."
        },
        {
            title: "Silver Medalist in the National Mathematics Olympiad for University Students (2012)",
            description: "Demonstrated exceptional mathematical skills and quick thinking in a highly competitive environment."
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center py-10 px-4">
            <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
                <Header
                    email="anel.a90@gmail.com"
                    linkedIn="https://www.linkedin.com/in/anelfdz"
                    location="Chile/Remote"
                    nextChallenge="Seeking a challenging senior leadership role where my extensive experiences on software development, computer design and technical innovation skills can synthesize into revolutionary products."
                    interests="Strong interest in Productivity & Platform Engineering and Cross-Functional collaboration. Open to relocation to the United States for the right opportunity."
                />
                <Profile/>
                <Skills/>
                <Education
                    degree="Bachelor of Computer Science"
                    university="University of Informatic Sciences, Cuba"
                    duration="2009 - 2014"
                />
                <Experience experiences={experiences}/>
                <Awards awards={awards} />
            </div>
        </div>
    );
};

export default Resume;
