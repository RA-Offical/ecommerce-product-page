import { useState } from "react";
import { Cart, Header, Product } from "./components";

function App() {
	const [cart, setCart] = useState([]);
	const getItemIndex = (id) => {
		return cart.findIndex((item) => item.id === id);
	};

	const hanldeIncrement = () => {
		const index = getItemIndex(0);
		const newCart = [...cart];
		let newItem;

		if (index === -1) {
			newItem = {
				id: 0,
				title: "Fall Limited Edition Sneakers",
				price: 125,
				itemBought: 1,
			};
			newCart.push(newItem);
		} else {
			const item = newCart[index];
			newItem = { ...item, itemBought: item.itemBought + 1 };
			newCart[index] = newItem;
		}

		setCart(newCart);
	};

	const handleDecrement = (id) => {
		if (cart.length === 0) return;

		const newCart = cart
			.map((item) => {
				if (item.id === id) {
					return { ...item, itemBought: item.itemBought - 1 };
				}
				return item;
			})
			.filter((item) => item.itemBought !== 0);

		setCart(newCart);
	};

	const removeFromCart = (id = 0) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	return (
		<div className="app">
			<Header cart={cart} removeFromCart={removeFromCart} />
			<Product
				setCart={setCart}
				cart={cart}
				hanldeIncrement={hanldeIncrement}
				handleDecrement={handleDecrement}
			/>
		</div>
	);
}

export default App;
