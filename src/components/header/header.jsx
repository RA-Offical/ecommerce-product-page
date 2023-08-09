import { useState } from "react";
import { Navbar, Cart } from "../";
import useComponentVisble from "../../hooks/useComponentVisible";

import accountImg from "../../assets/avatar.png";
import { HiMenu } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";

function Header({ cart, removeFromCart }) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const {
		isVisible: isCartOpen,
		setIsVisible: setIsCartOpen,
		componentRef: cartRef,
	} = useComponentVisble(false, hanldeCartOutsideClick);

	// When click happen but does not on cart menu
	function hanldeCartOutsideClick(e) {
		if (cartRef.current) {
			const isCartClick = cartRef.current.contains(e.target);
			if (!isCartClick) {
				setIsCartOpen(false);
			}
		}
	}

	// When click on cart button, cart menu will be shown
	function handleCartButtonClick(e) {
		e.stopPropagation();
		setIsCartOpen(!isCartOpen);
	}

	return (
		<div className="header-wrapper">
			<header className="container flex justify-btw primary-header">
				{/* Cart component which will be absolute relative to primary header */}

				{isCartOpen && (
					<Cart
						cart={cart}
						cartRef={cartRef}
						removeFromCart={removeFromCart}
					/>
				)}

				{/* Other header content */}
				<div className="header-left flex align-ic">
					<button
						className="btn btn--icon btn--icon-full header__btn--menu"
						onClick={(e) => setIsNavOpen(true)}
					>
						<HiMenu />
					</button>
					<a
						href="#"
						className="link-style-none fw-bold text-neutral-800 app-logo"
					>
						sneakers
					</a>
				</div>

				{/* Navbar component */}
				<Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

				<div className="header-right flex align-ic">
					<button
						className="btn btn--icon btn--icon-full header__cart--btn"
						onClick={handleCartButtonClick}
					>
						<BsCart3 />

						{cart.length > 0 && (
							<span className="bg-primary-600 text-neutral-400 fw-bold cart-notification">
								{cart.length}
							</span>
						)}
					</button>

					<button className="btn btn--icon btn--icon-full btn--icon-full-lg header__account--btn">
						<img src={accountImg} alt="" />
					</button>
				</div>
			</header>
		</div>
	);
}

export default Header;
