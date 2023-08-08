import { useState } from "react";
import { Navbar } from "../";
import accountImg from "../../assets/avatar.png";
import { HiMenu } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";

function Header() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="header-wrapper">
			<header className="container flex justify-btw primary-header">
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
					<button className="btn btn--icon btn--icon-full">
						<BsCart3 />
					</button>

					<button className="btn btn--icon btn--icon-full btn--icon-full-lg">
						<img src={accountImg} alt="" />
					</button>
				</div>
			</header>
		</div>
	);
}

export default Header;
