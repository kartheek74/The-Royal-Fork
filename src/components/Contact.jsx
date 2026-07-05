import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <h2>Reserve Your Table</h2>

      <div className="contact-container">

        {/* Contact Information */}

        <div className="contact-info">

          <h3>Visit Us</h3>

          <p>
            <FaMapMarkerAlt className="contact-icon" />
            Visakhapatnam, Andhra Pradesh
          </p>

          <p>
            <FaPhoneAlt className="contact-icon" />
            +91 6309427932
          </p>

          <p>
            <FaEnvelope className="contact-icon" />
            royalfork@email.com
          </p>

          <h4>Opening Hours</h4>

          <p>Monday - Friday : 11:00 AM - 10:30 PM</p>

          <p>Saturday - Sunday : 10:00 AM - 11:30 PM</p>

        </div>

        {/* Reservation Form */}

        <form className="reservation-form">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            required
          />

          <input
            type="date"
            required
          />

          <input
            type="time"
            required
          />

          <textarea
            rows="5"
            placeholder="Special Requests"
          ></textarea>

          <button
            className="btn"
            type="submit"
          >
            Reserve Now
          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;