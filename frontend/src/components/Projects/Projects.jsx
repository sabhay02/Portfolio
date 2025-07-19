import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: "🍔 Food Delivery Web App",
    tech: "ReactJS, NodeJS, MongoDB",
    link: "https://food-delivery-lnh7.onrender.com/",
    description: [
      "Built a scalable full-stack platform supporting user, restaurant, and admin dashboards.",
      "Integrated Stripe for secure payments; tested extensively for stability.",
      <>
        Deployed front-end &{' '}
        <a
          href="https://food-delivery-admin-2aar.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link"
        >
          Admin Panel
        </a>{' '}
        on Render, reducing load times by 30%.
      </>,
        "Implemented JWT authentication for secure user sessions.",
        "Optimized for mobile with responsive design.",      
    ],
  },
  {
    title: "💬 Real-Time Chat App",
    tech: "ReactJS, NodeJS, Socket.IO",
    link: "https://chatapp-taupe-nu.vercel.app/",
    description: [
      "Developed a scalable chat application enabling instant messaging among 50+ concurrent users using Socket.IO.",
      "Integrated Gemini AI to suggest smart replies and detect spam, boosting user engagement by 20% in internal tests.",
      "Implemented user authentication with JWT, ensuring secure sessions.",
        "Deployed on Vercel for front-end and Render for back-end, achieving 99.9% uptime."
    ],
  },
  {
  title: "🎬 Netflix Clone",
  tech: "ReactJS, Firebase, TMDB API",
  link: "https://netflix-clone-203s.onrender.com/",
  description: [
    "Built a Netflix-inspired web app with real-time user authentication and personalized content feeds.",
    "Integrated Gemini AI + TMDB API to recommend top-rated movies, increasing user watch time by 15% in tests.",
    "Implemented responsive design for seamless viewing across devices.",
  ],
},
];


const Projects = () => {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    refs.current = refs.current.slice(0, projects.length);
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setVisible(prev => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(ref => ref && observer.observe(ref));

    return () => refs.current.forEach(ref => ref && observer.unobserve(ref));
  }, []);

  return (
    <div id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card ${visible[idx] ? 'animate' : ''}`}
            ref={el => refs.current[idx] = el}
          >
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <ul className="description">
              {project.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
