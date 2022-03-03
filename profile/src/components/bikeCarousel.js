// import moustache from '../Profile-Pics/moustache.jpg';
// import giant from '../Profile-Pics/giant.jpg';
import { moustache, giant } from '../Profile-Pics/index';

const BikeCarousel = () => {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					class="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						className="d-block rounded photo"
						src={moustache}
						alt="moustache"
					/>
				</div>
				<div class="carousel-item">
					<img className="d-block rounded photo" src={giant} alt="giant" />
				</div>
			</div>
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default BikeCarousel;
