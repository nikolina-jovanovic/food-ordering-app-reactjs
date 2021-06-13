import "./styles.css";
import Menu from "./components/Menu";
import Order from "./components/Order";
import { useEffect, useState } from "react";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [showOrder, setShowOrder] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRemove = (item) => {
    const exist = cartItems.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const handleClickMenu = () => {
    setShowMenu(true);
    setShowOrder(false);
  };

  const handleClickOrder = () => {
    setShowOrder(true);
    setShowMenu(false);
  };

  // Documenu API KEY:
  const api_key = "e165eb892160d12a2cc400f89edc0dc2";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.documenu.com/v2/restaurant/4072702673999819?key=${api_key}`
      );
      // Get Menu Items from restaurant doesn't work directly on Documenu,so I had to write path.
      const path = result.data.result.menus[0].menu_sections[13].menu_items;

      const sliced = path.slice(0, 10);
      sliced.forEach((item, i) => {
        item.id = i + 1;
      });
      setMenuItems(sliced);
    };
    fetchData();
  }, []);
  console.log(menuItems);

  return (
    <div className="App">
      <ul>
        <li>
          <div onClick={handleClickMenu}>
           <Link to="/menu" style={{textDecoration:"none",color:"rgb(43, 31, 95)"}}> Menu </Link>
          </div>
        </li>
        <li className="li-items">
          <div onClick={handleClickOrder}>
           <Link to="/order" style={{textDecoration:"none",color: "rgb(43, 31, 95)"}}> Order </Link>
          </div>
        </li>
      </ul>
      <Switch>
      {showMenu && (
        <Route path="/menu">
         <Menu menuItems={menuItems} cartItems={cartItems} onAdd={onAdd} />
        </Route>
      )}
      {showOrder && (
        <Route path="/order">
         <Order
          menuItems={menuItems}
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
         />
        </Route>
      )}
      </Switch>
    </div>
  );
}
