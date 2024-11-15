import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 vintage-effect-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl font-playfair mb-6 text-vintage-text">
            Get In Touch
          </h1>
          <p className="text-vintage-text/70 mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <ContactMethod
              icon={<FaEnvelope className="w-6 h-6" />}
              title="Email"
              content="[email protected]"
            />
            <ContactMethod
              icon={<FaMapMarkerAlt className="w-6 h-6" />}
              title="Location"
              content="Ahmedabad, India"
            />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-playfair mb-4 text-vintage-text">
              Current Availability
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <p className="text-vintage-text/70">Available for work</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-vintage-paper p-8 rounded-lg border border-vintage-accent/20">
          <h2 className="text-2xl font-playfair mb-6 text-vintage-text">
            Send Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormField
              label="Subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
            />
            <div>
              <label className="block text-vintage-text mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-vintage-dark border border-vintage-accent/20 rounded-lg text-vintage-text focus:outline-none focus:border-vintage-accent resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-vintage-accent text-vintage-dark py-3 rounded-lg hover:bg-vintage-accent/90 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactMethod = ({ icon, title, content }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="text-vintage-accent">{icon}</div>
      <div>
        <h3 className="font-semibold text-vintage-text mb-1">{title}</h3>
        <p className="text-vintage-text/70">{content}</p>
      </div>
    </div>
  );
};

const FormField = ({ label, name, type, value, onChange }) => {
  return (
    <div>
      <label className="block text-vintage-text mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 bg-vintage-dark border border-vintage-accent/20 rounded-lg text-vintage-text focus:outline-none focus:border-vintage-accent"
        required
      />
    </div>
  );
};

export default Contact;
