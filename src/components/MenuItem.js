import React from "react";
import ItemInfo from "./ItemInfo";

const MenuItem = ({ menuItems, onAdd, onRemove }) => {
  const images = [
    "/images/1.PNG",
    "/images/2.PNG",
    "/images/3.PNG",
    "/images/4.PNG",
    "/images/5.PNG",
    "/images/6.PNG",
    "/images/7.PNG",
    "/images/8.PNG",
    "/images/9.PNG",
    "/images/10.PNG"
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
