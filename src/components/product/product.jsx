import { BsCart3 } from "react-icons/bs";
import { HiPlus, HiMinus } from "react-icons/hi";

function Product() {
	return (
		<div className="product-wrapper">
			<div className="container product">
				<div className="product-info">
					<p className="text-primary-600 fw-bold product__company">
						Sneaker Company
					</p>

					<h2 className="fw-bold text-neutral-800 product__title">
						Fall Limited Edition Sneakers
					</h2>

					<p className="product__desc">
						These low-profile sneakers are your perfect casual wear
						companion. Featuring a durable rubber outer sole,
						they'll withstand everything the weather can offer.
					</p>

					<div className="prices-container">
						<div className="flex align-ic">
							<p className="fw-semi-bold text-neutral-800 product__price-after-discount">
								$125.00
							</p>
							<p className="fw-bold text-primary-600 bg-primary-100 product__discount">
								50%
							</p>
						</div>

						<p className="fw-bold text-neutral-600 product__original-price">
							$250.00
						</p>
					</div>

					<div className="flex product-action">
						<div className="bg-neutral-500 flex  product-control-container">
							<button className="btn btn--icon text-primary-600 product-control__dec--btn">
								<HiPlus />
							</button>
							<span className="btn--icon text-neutral-800 fw-bold">
								0
							</span>
							<button className="btn btn--icon text-primary-600  product-control__inc--btn">
								<HiMinus />
							</button>
						</div>

						<button className="btn btn--icon btn--icon-text btn--icon-text-primary btn--block">
							<BsCart3 /> Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
