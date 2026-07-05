import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Logo */}

        <div className="footer-section">

          <h2 className="footer-logo">
            THE ROYAL FORK
          </h2>

          <p>
            Experience luxury dining where every dish is crafted
            with passion, elegance, and premium ingredients.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#home">Home</a></li>

            <li><a href="#menu">Menu</a></li>

            <li><a href="#special">Chef's Special</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#contact">Reservations</a></li>

          </ul>

        </div>

        {/* Social */}

        <div className="footer-section">

          <h3>Follow Us</h3>

          <div className="footer-social">

            <a href="/">
              <FaFacebookF />
            </a>

            <a href="/">
              <FaInstagram />
            </a>

            <a href="/">
              <FaXTwitter />
            </a>

            <a href="/">
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} THE ROYAL FORK. All Rights Reserved.
        </p>

      </div>

      {/* Back To Top */}

      <button
        className="scroll-top"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>

    </footer>

  );

};

export default Footer;