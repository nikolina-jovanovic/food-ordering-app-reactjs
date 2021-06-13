import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuItems, onAdd, onRemove }) => {
  return (
    <div className="menu">
      <div className="title">
        ➟ Choose a burger.<br></br> ➟ Make an order.
        <br></br>➟Enjoy your meal in a couple of minutes.
      </div>
      <MenuItem menuItems={menuItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
};
export default Menu;
