import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-vintage-dark vintage-effect-dark">
      <div className="text-center space-y-8 z-10">
        <h1 className="text-6xl font-playfair font-bold text-vintage-text">
          Akshay Komale
        </h1>
        <p className="text-xl text-vintage-text/80 max-w-2xl mx-auto">
          Full-stack developer crafting digital experiences with modern
          technologies and creative solutions.
        </p>
        <div className="space-x-6">
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-vintage-accent text-vintage-dark rounded hover:bg-vintage-accent/90 transition font-medium"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="inline-block px-6 py-3 border-2 border-vintage-accent text-vintage-accent rounded hover:bg-vintage-accent/10 transition"
          >
            View Projects
          </Link>
        </div>
        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
