import { CourseCard } from "../Components/courseCard";
import { useEffect,useState } from "react";

export default function DataScience() {

    const allCourses = [
        {
            category: "full-stack-developement",
            title: "Web Development Roadmap for Beginners 2023",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
            description: "Web Development is a booming, high-paying, and indeed promising career in the IT industry, into.",
            date: "17 March 2023"
        },
        {
            category: "full-stack-developement",
            title: "Top 7 Back-End Developer Skills You Should Know",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/backend-skills.jpg",
            description: "We all rely on the internet for everything. Open google and ask your doubt, and",
            date: "4 March 2023"
        },
        {
            category: "full-stack-developement",
            title: "Top 10 Front-End Developer Skills You Should Know",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/03/skills.jpg",
            description: "Websites nowadays are eye-catchy, and also responsive at the same time. Ever wondered who’s the",
            date: "2 March 2023"
        },
        {
            category: "data-science",
            title: "data-science vs. Machine Learning: What every elite coder needs to know",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/07/5.-Top-Data-Science-applications-and-use-cases-for-businesses.png",
            description: "As the world becomes increasingly data-driven, the demand for professionals who can analyze and interpret",
            date: "4 April 2023"
        },
        {
            category: "data-science",
            title: "Can you achieve a data-science job with no work experience?",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Screenshot-847-e1668690380410.png",
            description: "The door to data-science jobs pretty much remains locked for beginners with no experience,",
            date: "20 November 2022"
        },
        {
            category: "data-science",
            title: "12 Unique Ways How data-science Helps Marketing Teams?",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/09/How-Data-Science-helps-the-marketing-team-2048x1072.png",
            description: "Which marketing strategies work? What new methods make a crash? How can the creative domain",
            date: "1 October 2022"
        },
        {
            category: "cyber-security",
            title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
            description: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
            date: "27 December 2022"
        },
        {
            category: "cyber-security",
            title: "Top 7 cyber-security Attacks in Real Life",
            image: "https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg",
            description: "cyber-security attacks are the type of actions that are designed to destroy, steal, modify,",
            date: "10 June 2022"
        },
        {
            category: "cyber-security",
            title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
            image: "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png",
            description: "There is something fascinating about a lone hacker in black hoodies using a single system",
            date: "1 March 2021"
        },
        {
            category: "career",
            title: "Top Career Options in India in 2023",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/top-career-options-in-india.jpg",
            description: "In today’s rapidly changing world, career choices carry immense significance. As the job market undergoes",
            date: "27 June 2023"
        },
        {
            category: "career",
            title: "What is TCS NQT | Everything You Need to Know",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/06/TCS-NQT-EXAM-2023.jpg",
            description: "As a fresh graduate, your goal is to join a reputable company and start your",
            date: "20 June 2023"
        },
        {
            category: "career",
            title: "How to Become a Successful QA Automation Tester",
            image: "https://www.guvi.in/blog/wp-content/uploads/2023/05/QA-automation-tester-1.jpg",
            description: "It is not a secret that top tech companies have been transitioning from manual to",
            date: "25 May 2023"
        }
    ]
    return (
        <div>
            <div className="row g-5">
                {
                    allCourses.map((item,index) => {
                        if(item.category === "data-science"){
                            return <CourseCard key={index} details={item}/>
                        }
                    })
                }
            </div>
        </div>
    );
}