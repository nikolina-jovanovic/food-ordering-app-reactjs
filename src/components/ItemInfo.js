import React from "react";

const ItemInfo = ({ menuItems, images, onAdd, descriptions }) => {


  var i = 0;
  const increment = () => {
    i = i + 1;
  };
  return (
    <>
      {menuItems.map((item) => (
        <div className="menu-item" key={item.id}>
          <img className="img" src={images[i]} alt="random" />
          <div>
            <h2>{item.name}</h2>
            <h5>{descriptions[i]}</h5>
            <h2>
              <strong>${item.price}</strong>
            </h2>
            <button onClick={() => onAdd(item)}>
              <strong>Add to Cart</strong>
            </button>
          </div>
          {increment()}
        </div>
      ))}
    </>
  );
};

export default ItemInfo;
