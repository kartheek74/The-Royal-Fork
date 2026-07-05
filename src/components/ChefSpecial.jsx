import chefSpecial from "./royal-sea-food-platter.png";

const ChefSpecial = () => {
  return (
    <section className="special" id="special">

      <h2>Chef's Special</h2>

      <div className="special-card">

        <div className="special-image">
          <img
            src={chefSpecial}
            alt="Royal Seafood Platter"
          />
        </div>

        <div className="special-content">

          <h3>Royal Seafood Platter</h3>

          <p>
            Experience our signature seafood platter featuring grilled lobster,
            juicy prawns, fresh Atlantic salmon, garlic butter sauce,
            seasonal vegetables, and fragrant saffron rice.
            Every plate is handcrafted by our executive chef to deliver
            an unforgettable fine dining experience.
          </p>

          <span>₹1499</span>

          <a href="#contact" className="btn">
            Reserve Now
          </a>

        </div>

      </div>

    </section>
  );
};

export default ChefSpecial;