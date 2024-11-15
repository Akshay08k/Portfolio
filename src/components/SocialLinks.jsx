import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      <SocialLink
        href="https://github.com/akshay08k"
        icon={<FiGithub className="w-6 h-6" />}
        label="GitHub"
      />
      <SocialLink
        href="https://linkedin.com/in/akshay_komale"
        icon={<FiLinkedin className="w-6 h-6" />}
        label="LinkedIn"
      />
      <SocialLink
        href="https://twitter.com/akshay_komale"
        icon={<FiTwitter className="w-6 h-6" />}
        label="Twitter"
      />
    </div>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-vintage-accent hover:text-vintage-gold transition-colors duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default SocialLinks;
