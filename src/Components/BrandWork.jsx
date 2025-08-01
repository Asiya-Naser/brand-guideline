// BrandWork.jsx

import React from 'react';
import "./Brandwork.css";
// ✅ Data array of your brand items
const projects = [
  {
    title: "Elegance Consult Branding",
    description:
      "A full branding package including logo, business card, mug mockup, and social media.",
    items: [
      { name: "Logo", image: "/assets/logo versions.png" },
      { name: "Business Card", image: "/assets/card.jpg" },
      { name: "Mug Mockup", image: "/assets/mug.png" },
      { name: "Facebook cover", image: "/assets/facebook.png" },
      { name: "Social Media", image: "/assets/social.png" },
      { name: "Banner", image: "/assets/banner.png" },
    ],
  },
];

const BrandWork = () => {
  return (
    <div className="brand-work">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="items-grid">
            {project.items.map((item, idx) => (
              <div key={idx} className="item">
                <h4>{item.name}</h4>
                <img src={item.image} alt={item.name} style={{ width: '200px', borderRadius: '8px' }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandWork;
