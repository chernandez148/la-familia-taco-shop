import React from "react";
import tacoOne from "../../../assets/menu-tacos-one.jpg";
import tacoTwo from "../../../assets/menu-taco-two.png";
import burritoTwo from "../../../assets/menu-burrito-two.jpg";
import hotDogOne from "../../../assets/menu-hotdog-one.jpg";
import tortasOne from "../../../assets/menu-tortas-one.jpg";
import quesadillaOne from "../../../assets/manu-quesadilla-one.jpg";
import "./styles.css";

function Menu() {
  const menu = [
    {
      category: "Tacos",
      items: [
        {
          name: "Tacos de Asada",
          description:
            "Fresh Asada Taco served with red or green sauce, guacamole and Onion/cilantro.",
          price: "$3.00",
        },
        {
          name: "Taco de Pollo",
          description:
            "Fresh and Tasty Chikin' Taco, served with red or green sauce, guacamole and onion/cilantro.",
          price: "$3.00",
        },
        {
          name: "Taco Al Pastor",
          description:
            "Original Pastor recipe for the best and fresh tacos, served with red or green sauce, guacamole and onion/cilantro.",
          price: "$3.00",
        },
        {
          name: "Taco Azteca",
          description:
            "Asada, Chikin or Pastor, sauce, onion, cilantro and grilled nopal.",
          price: "$3.50",
        },
        {
          name: "Tacos de Cabeza",
          description:
            "Tradicional Tacos de Cabeza with Salsa Roja o Verde, guacamole, Cilantro & Cebolla.",
          price: "$3.50",
        },
        {
          name: "Taco de Chicharron",
          description:
            "Tradicional Tacos de Chicharron with Salsa Roja o Verde, guacamole, Cilantro & Cebolla.",
          price: "$3.00",
        },
        {
          name: "Taco de Carnitas",
          description:
            "Tradicional Tacos de Carnitas with Salsa Roja o Verde, guacamole, Cilantro & Cebolla.",
          price: "$3.00",
        },
        {
          name: "Veggie Tacos",
          description:
            "Veggie with Salsa Roja o Verde, guacamole, Cilantro & Cebolla.",
          price: "$3.00",
        },
      ],
    },
    {
      category: "Burritos",
      items: [
        {
          name: "Classic Burrito",
          description: "Burrito La Familia Style, you won't be hungry!",
          price: "$12.00",
        },
        {
          name: "Street Burrito Style",
          description:
            "Asada o Chikin' o Pastor, cheese, sauce, onion and cilantro.",
          price: "$13.00",
        },
      ],
    },
    {
      category: "Hot Dogs",
      items: [
        {
          name: "La Familia Street Dog",
          description:
            "UNIQUE Tj Style HotDog, direct from the streets of TJ, cucumber, grilled chili, grilled onion and bacon.",
          price: "$7.00",
        },
      ],
    },
    {
      category: "Tortas",
      items: [
        {
          name: "Torta",
          description:
            "Choice of meat, Grilled Cheese, Beans, Onion, Cilantro, Red or Green Salsa.",
          price: "$12.00",
        },
      ],
    },
    {
      category: "Quesadilla & Mulitas",
      items: [
        {
          name: "Mega Quesadilla",
          description: "Choice of Meat, cheese, sauce & onion/cilantro.",
          price: "$12.00",
        },
        {
          name: "Mulitas",
          description:
            "A crispy tortilla filled with chunks of grilled meat, cheese, and salsa or guacamole topping.",
          price: "$3.50",
        },
      ],
    },
  ];

  console.log(menu);

  return (
    <div className="Menu">
      <h1>THE MENU</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        hendrerit odio in tortor euismod, et tincidunt metus tristique.
      </p>
      <div className="menu-wrapper">
        <div className="category">
          <div className="items">
            <h3>TACOS</h3>
            <p>Description</p>
            <ul>
              {menu[0].items.map((item) => (
                <li>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img className="image-one" src={tacoOne} alt="taco one" />
            <img className="image-two" src={tacoTwo} alt="taco two" />
          </div>
        </div>
        <div className="category">
          <div className="items">
            <h3>BURRITOS</h3>
            <p>Description</p>
            <ul>
              {menu[1].items.map((item) => (
                <li>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img className="image-one" src={burritoTwo} alt="burrito one" />
          </div>
        </div>
        <div className="category">
          <div className="items">
            <h3>HOT DOGS</h3>
            <p>Description</p>
            <ul>
              {menu[2].items.map((item) => (
                <li>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img className="image-one" src={hotDogOne} alt="hot dog one" />
          </div>
        </div>
        <div className="category">
          <div className="items">
            <h3>Tortas</h3>
            <p>Description</p>
            <ul>
              {menu[3].items.map((item) => (
                <li>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img className="image-one" src={tortasOne} alt="tortas one" />
          </div>
        </div>
        <div className="category">
          <div className="items">
            <h3>Quesadilla & Mulitas</h3>
            <p>Description</p>
            <ul>
              {menu[4].items.map((item) => (
                <li>
                  <p className="name">{item.name}</p>
                  <p className="price">{item.price}</p>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="images">
            <img
              className="image-one"
              src={quesadillaOne}
              alt="quesadilla one"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
