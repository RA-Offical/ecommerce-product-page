import { IoClose } from "react-icons/io5";

function Navbar({ isNavOpen, setIsNavOpen }) {
	return (
		<div className={`nav-wrapper ${isNavOpen ? "opened" : ""}`}>
			<nav className="navbar ">
				<button
					className="btn btn--icon btn--icon-full navbar__btn--close"
					onClick={(e) => {
						setIsNavOpen(false);
					}}
				>
					<IoClose />
				</button>

				<ul role="list" className="nav-list">
					<li className="nav__item">
						<a href="#" className="link-style-none nav__link">
							Collection
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="link-style-none nav__link">
							Man
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="link-style-none nav__link">
							Women
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="link-style-none nav__link">
							About
						</a>
					</li>
					<li className="nav__item">
						<a href="#" className="link-style-none nav__link">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
