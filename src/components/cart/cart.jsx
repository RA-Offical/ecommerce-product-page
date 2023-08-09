import { CartItem } from "../";

function Cart({ cart, cartRef, removeFromCart }) {
	return (
		<div className="cart" ref={cartRef}>
			<h2 className="fw-semi-bold text-neutral-800 cart__title">Cart</h2>
			{cart.length > 0 ? (
				<div className="cart-item-container">
					{cart.map((cartItem) => {
						return (
							<CartItem
								key={cartItem.id}
								removeFromCart={removeFromCart}
								cartItem={cartItem}
							/>
						);
					})}
					<button className="btn btn--primary btn--block cart__checkout--btn">
						Checkout
					</button>
				</div>
			) : (
				<div className="align-ic justify-cc cart-item-container">
					<p>Cart is empty</p>
				</div>
			)}
		</div>
	);
}

export default Cart;
