import { FaUtensils, FaAward, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">

      <h2>Our Philosophy</h2>

      <p className="about-text">
        At <strong>THE ROYAL FORK</strong>, dining is more than a meal—it's an
        experience. Every dish is prepared using premium ingredients,
        timeless recipes, and elegant presentation to create unforgettable
        moments for every guest.
      </p>

      <div className="about-container">

        <div className="about-card">

          <FaUtensils className="about-icon" />

          <h3>Fresh Ingredients</h3>

          <p>
            We source fresh vegetables, premium meats, and authentic spices
            every day to ensure exceptional quality.
          </p>

        </div>

        <div className="about-card">

          <FaAward className="about-icon" />

          <h3>Premium Dining</h3>

          <p>
            Our chefs combine creativity and traditional techniques to
            deliver a luxurious dining experience.
          </p>

        </div>

        <div className="about-card">

          <FaLeaf className="about-icon" />

          <h3>Healthy & Sustainable</h3>

          <p>
            We believe great food should also be sustainable, fresh,
            and responsibly prepared.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;