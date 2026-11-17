function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="tech-list">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="card-link" href={link} target="_blank" rel="noreferrer">
        View project →
      </a>
    </div>
  );
}

export default ProjectCard;