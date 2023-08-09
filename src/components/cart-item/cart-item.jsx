import { RiDeleteBin5Line } from "react-icons/ri";
import imgThumnail1 from "../../assets/image-product-1-thumbnail.jpg";
import "./cart-item.css";

function CartItem({ cartItem, removeFromCart }) {
	const { title, price, itemBought } = cartItem;

	const total = price * itemBought;
	return (
		<div className="cart-item">
			<img src={imgThumnail1} alt="" className="cart-item__img" />

			<div className="cart-item-info-container">
				<h3 className="cart-item__title">{title}</h3>

				<div className="flex cart-item-price-info-container">
					<p className="cart-item__price">${price}</p>
					{"*"}
					<p className="cart-item__bought">{itemBought}</p>
					{" = "}
					<p className="text-neutral-800 fw-semi-bold cart-item__total-price">
						${total}
					</p>
				</div>
			</div>

			<button
				className="btn btn--icon btn--icon-full"
				onClick={(e) => {
					e.stopPropagation();
					removeFromCart(0);
				}}
			>
				<RiDeleteBin5Line />
			</button>
		</div>
	);
}

export default CartItem;
