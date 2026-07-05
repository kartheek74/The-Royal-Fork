import pasta from "./creamy-garlic-pasta.jpg";
import salmon from "./grilled-salmon.jpg";
import tandoori from "./tandoori.jpg";
import brownie from "./brownie.jpg";
import souffle from "./chocolate-souffle.jpg";

const dishes = [
  {
    id: 1,
    name: "Creamy Garlic Pasta",
    image: pasta,
    description: "Rich creamy garlic sauce topped with parmesan cheese.",
    price: "₹699",
  },
  {
    id: 2,
    name: "Grilled Salmon",
    image: salmon,
    description: "Fresh Atlantic salmon grilled with herbs and lemon butter.",
    price: "₹899",
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    image: tandoori,
    description: "Traditional Indian spices cooked in a clay oven.",
    price: "₹599",
  },
  {
    id: 4,
    name: "Chocolate Brownie",
    image: brownie,
    description: "Warm brownie served with vanilla ice cream.",
    price: "₹399",
  },
  {
    id: 5,
    name: "Chocolate Soufflé",
    image: souffle,
    description: "Classic French dessert with molten chocolate center.",
    price: "₹599",
  },
];

const Menu = () => {
  return (
    <section className="menu" id="menu">

      <h2>Signature Dishes</h2>

      <div className="menu-items">

        {dishes.map((dish) => (

          <div className="menu-card" key={dish.id}>

            <img
              src={dish.image}
              alt={dish.name}
            />

            <h3>{dish.name}</h3>

            <p>{dish.description}</p>

            <span>{dish.price}</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Menu;