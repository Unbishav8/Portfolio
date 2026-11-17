import profile from "../data/profile";

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      {profile.about.map((paragraph) => (
        <p className="about-text" key={paragraph}>{paragraph}</p>
      ))}
      <h3 className="skills-title">Skills</h3>
      <ul className="tech-list">
        {profile.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default About;