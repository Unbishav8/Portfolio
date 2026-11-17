import profile from "../data/profile";
import profilePic from "../assets/profile.jpeg";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-inner">
        <img
          className="hero-photo"
          src={profilePic}
          alt={`Portrait of ${profile.name}`}
        />
        <p className="hero-greeting">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn" href="#projects">View my work</a>
          <a className="btn btn-outline" href="#contact">Contact me</a>
        </div>
      </div>
    </header>
  );
}

export default Hero;