import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import profile from "../data/profile";

const FORM_ENDPOINT = "https://formspree.io/f/xppddwbq";

const emptyForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="contact-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="about-text">
          Have a project, job opening, or idea? Send me a message and I'll get
          back to you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Let's build something together</h3>
          <p className="about-text">
            Whether you need a full-stack web application or help with a
            project, feel free to reach out.
          </p>

          <div className="info-item">
            <div className="info-icon"><Mail size={22} /></div>
            <div>
              <p className="info-label">Direct Email</p>
              <p className="info-value">{profile.email}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Phone size={22} /></div>
            <div>
              <p className="info-label">Phone / WhatsApp</p>
              <p className="info-value">{profile.phone}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><MapPin size={22} /></div>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">{profile.location}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><Clock size={22} /></div>
            <div>
              <p className="info-label">Response Rate</p>
              <p className="info-value">{profile.responseTime}</p>
            </div>
          </div>

          <div className="social-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject *</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Project Inquiry / Job Opportunity"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Your message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, timeline, and goals..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="btn submit-btn"
              type="submit"
              disabled={status === "sending"}
            >
              <Send size={18} />
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-status success">
                Message sent. Thank you, I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>

      <p className="footer">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
}

export default Contact;