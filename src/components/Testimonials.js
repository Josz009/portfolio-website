
import React from 'react';

function Testimonials() {
  const feedbacks = [
    {
      name: "Jane Doe",
      role: "CTO at TechCorp",
      message: "Jose is an exceptional software engineer. His ability to deliver scalable and secure solutions is unparalleled.",
    },
    {
      name: "John Smith",
      role: "Senior Developer at WebWorks",
      message: "Working with Jose was a fantastic experience. His expertise in cybersecurity and web development is top-notch.",
    },
    {
      name: "Alice Johnson",
      role: "CEO at Innovate Solutions",
      message: "Jose's attention to detail and innovative mindset make him a standout professional in his field.",
    },
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2>What People Say</h2>
      <div className="feedback-container">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <p>{feedback.message}</p>
            <h4>{feedback.name}</h4>
            <p>{feedback.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
