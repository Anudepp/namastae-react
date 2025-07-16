import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice"; // Import the clearCart action

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    console.log("Cart cleared");
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0
        ? <p className="text-gray-600" align="center">
            Your cart is currently empty.
          </p>
        : <div>
            {cartItems.map((item, idx) => <MenuItem key={idx} info={item} />)}
          </div>}
    </div>
  );
};

export default Cart;
