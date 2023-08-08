import { useState, useMemo } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

function ProductCarasoul({ productData }) {
	const [slideIndex, setSlideIndex] = useState(0);

	const productDataSize = useMemo(() => productData.length, []);

	const incrementSlideIndex = () => {
		const newSlideIndex = (slideIndex + 1) % productDataSize;

		setSlideIndex(newSlideIndex);
	};

	const decrementSlideIndex = () => {
		const newSlideIndex =
			(slideIndex + productDataSize - 1) % productDataSize;

		setSlideIndex(newSlideIndex);
	};

	const handleSlideSelector = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className="carasoul-wrapper">
			<div className="carasoul">
				<button
					className="btn btn--icon btn--icon-half carasoul__btn"
					onClick={decrementSlideIndex}
				>
					<MdNavigateBefore />
				</button>

				<div className="carasoul-slide-container">
					{productData.map(({ id, imgPath }, currentIndex) => {
						let slide = "next__slide";

						if (currentIndex === slideIndex) {
							slide = "active__slide";
						} else if (
							currentIndex === slideIndex - 1 ||
							(slideIndex === 0 &&
								currentIndex === productDataSize - 1)
						) {
							slide = "prev__slide";
						}

						return (
							<img
								key={id}
								src={imgPath}
								className={`carasoul__slide ${slide}`}
							/>
						);
					})}
				</div>

				<button
					className="btn btn--icon btn--icon-half carasoul__btn"
					onClick={incrementSlideIndex}
				>
					<MdNavigateNext />
				</button>
			</div>
			<div className="carasoul-slide-selector-container">
				{productData.map(({ id, thumbnailPath }, index) => {
					return (
						<div
							key={id}
							className={`slide-selector ${
								id === slideIndex ? "selected" : ""
							}`}
							onClick={(e) => {
								handleSlideSelector(index);
							}}
						>
							<img key={id} src={thumbnailPath} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default ProductCarasoul;
