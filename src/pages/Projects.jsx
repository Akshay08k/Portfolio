const ProjectCard = ({ title, description, tech, featured, links }) => {
  return (
    <div
      className={`p-6 rounded-lg bg-vintage-paper border border-vintage-accent/20 ${
        featured ? "col-span-2" : ""
      }`}
    >
      {featured && (
        <span className="text-vintage-accent text-sm mb-2 block">
          Featured Project
        </span>
      )}
      <h3 className="text-2xl font-playfair text-vintage-text mb-3">{title}</h3>
      <p className="text-vintage-text/70 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-vintage-dark rounded-full text-sm text-vintage-text/60"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            className="text-vintage-accent hover:text-vintage-gold transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};  

const Projects = () => {
  const projects = [
    {
      title: "Askify",
      description:
        "A sophisticated Q&A platform built with PHP and CodeIgniter...",
      tech: ["PHP", "CodeIgniter", "MySQL", "jQuery", "WebSockets"],
      featured: true,
      links: [
        { text: "Live Demo", url: "#" },
        { text: "GitHub", url: "#" },
      ],
    },
    // Add other projects...
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-serif mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
