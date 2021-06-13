import React from "react";
import ItemInfo from "./ItemInfo";

const MenuItem = ({ menuItems, onAdd, onRemove }) => {
  const images = [
    "/1.png",
    "../images/2.png",
    "../images/3.png",
    "../images/4.png",
    "../images/5.png",
    "../images/6.png",
    "../images/7.png",
    "../images/8.png",
    "../images/9.png",
    "../images/10.png"
  ];


  const descriptions = [
    "Angus beef, lettuce, tomato, onions, pickles, mayo",
    "Angus beef, lettuce, onions, serrano peppers, jalapeno peppers, pepper jack cheese, chipotle mayo, fire sauce",
    "Angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo",
    "Lamb, lettuce, tomato, pickled onions, feta cheese, cucumber, tzatziki sauce",
    "Angus beef, house-made chili, queso, onions, pickles",
    "Angus beef, lettuce, grilled ham, avocado, queso fresco, jalapenos, chipotle mayo",
    "Angus beef, lettuce, tomato, caramelized onions, bacon, onion rings, cheddar, BBQ sauce",
    "Angus beef stacked with pulled pork, mac & cheese, fried egg, slaw, mayo",
    "Angus beef, lettuce, caramelized onions, roasted mushrooms, smoked gouda cheese, garlic-herb mayo",
    "Red bean & mushrooms patty, lettuce, tomato, onions, pickles, mayo"
  ];

  return (
    <>
      <ItemInfo
        menuItems={menuItems}
        descriptions={descriptions}
        images={images}
        onRemove={onRemove}
        onAdd={onAdd}
      />
    </>
  );
};

export default MenuItem;
