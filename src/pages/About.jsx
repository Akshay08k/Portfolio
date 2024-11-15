import { FaCode, FaDatabase, FaServer, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-4 vintage-effect-dark">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-vintage-accent/30 paper-texture-dark">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKE1-b5WXAeD3jpD98l5TtyVZ352pVN7-zTA&s"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-playfair mb-2 text-vintage-text">
            Akshay Komale
          </h1>
          <h2 className="text-xl text-vintage-accent mb-4">
            Full Stack Developer
          </h2>
          <p className="text-vintage-text/80 max-w-2xl">
            I'm a passionate full-stack developer with a deep love for creating
            elegant solutions to complex problems. Currently pursuing my MCA, I
            blend academic knowledge with practical experience in modern web
            technologies.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-playfair mb-8 text-vintage-text">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend Development"
            skills={[
              "React.js / Next.js",
              "TypeScript",
              "HTML5 / CSS3",
              "Responsive Design",
              "UI/UX Principles",
            ]}
            icon={<FaCode className="w-6 h-6" />}
          />
          <SkillCard
            title="Backend Development"
            skills={[
              "Node.js / Express",
              "PHP / CodeIgniter",
              "Python",
              "RESTful APIs",
            ]}
            icon={<FaServer className="w-6 h-6" />}
          />
          <SkillCard
            title="Database & Tools"
            skills={["MongoDB", "Docker", "Git / GitHub"]}
            icon={<FaDatabase className="w-6 h-6" />}
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-playfair mb-8 text-vintage-text">
          Education
        </h2>
        <div className="space-y-6">
          <EducationCard
            degree="Master of Computer Applications"
            school="Lok Jagruti Kendra University"
            year="2024 - 2026"
            description="Focusing on advanced software development, algorithms, and modern web technologies."
          />
          <EducationCard
            degree="Bachelor of Computer Applications"
            school="Gujarat University"
            year="2021 - 2024"
            description="Foundation in computer science, programming, and software development."
          />
        </div>
      </div>

      {/* Interests Section */}
      <div>
        <h2 className="text-3xl font-playfair mb-8 text-vintage-text">
          Interests & Hobbies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InterestItem icon="🎮" text="Game Development" />
          <InterestItem icon="📚" text="Tech Reading" />
          <InterestItem icon="🎸" text="Music" />
          <InterestItem icon="⛰️" text="Trekking" />
        </div>
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills, icon }) => {
  return (
    <div className="p-6 bg-vintage-paper rounded-lg border border-vintage-accent/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-vintage-accent">{icon}</div>
        <h3 className="text-xl font-semibold text-vintage-text">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-vintage-text/70">
            • {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const EducationCard = ({ degree, school, year, description }) => {
  return (
    <div className="p-6 bg-vintage-paper rounded-lg border border-vintage-accent/20">
      <div className="flex items-center gap-2 mb-2">
        <FaGraduationCap className="w-6 h-6 text-vintage-accent" />
        <h3 className="text-xl font-semibold text-vintage-text">{degree}</h3>
      </div>
      <p className="text-vintage-accent">{school}</p>
      <p className="text-sm text-vintage-text/60 mb-2">{year}</p>
      <p className="text-vintage-text/70">{description}</p>
    </div>
  );
};

const InterestItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-2 p-4 bg-vintage-paper rounded-lg border border-vintage-accent/20">
      <span className="text-2xl">{icon}</span>
      <span className="text-vintage-text/70">{text}</span>
    </div>
  );
};

export default About;
