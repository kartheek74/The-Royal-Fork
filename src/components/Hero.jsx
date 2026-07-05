import heroImage from "./hero.jpg";

const Hero = () => {
  return (
    <header
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <h1>Fine Dining Experience</h1>

        <p>
          Where Taste Meets Elegance
        </p>

        <a href="#menu" className="btn">
          Discover Menu
        </a>

      </div>
    </header>
  );
};

export default Hero;