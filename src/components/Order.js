import React from "react";

const Order = ({ onAdd, cartItems, onRemove }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div class="order">
      {cartItems.length === 0 && (
        <h2 style={{ marginBottom: "20px" }}>Cart is empty.</h2>
      )}
      {cartItems.map((item) => (
        <>
          <div className="order-content">
            <div style={{ display: "inline-block", width: "400px" }}>
              {item.name}
            </div>
            <div style={{ display: "inline-block", width: "100px" }}>
              <button className="add-remove" onClick={() => onAdd(item)}>
                +
              </button>
              <button className="add-remove" onClick={() => onRemove(item)}>
                -
              </button>
            </div>
            <div style={{ display: "inline-block", width: "100px" }}>
              {item.qty} x <strong>${item.price}</strong>
            </div>
          </div>
        </>
      ))}
      <hr></hr>
      <div className="total">
        <strong>TOTAL: </strong>
      </div>
      <div
        style={{
          width: "100px",
          display: "inline-block",
          fontFamily: "Montserrat",
          fontSize: "23px"
        }}
      >
        <strong>${totalPrice}</strong>
      </div>
      <br></br>
      <button className="make-an-order">MAKE AN ORDER</button>
    </div>
  );
};

export default Order;
