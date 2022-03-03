import './index.css';
import './styles.scss';
import { Bay, Niagra, meImg } from './Profile-Pics';
import {
	BikeCarousel,
	NavBar,
	Text,
	TxtMap,
	BikeTrips,
	ProjectGrid,
	CertificateGrid,
} from './components';

export default function App() {
	return (
		<div className="bg-light bg-opacity-25">
			<NavBar />
			<section className="about" id="about">
				<h1>Home</h1>
				<div className="pic-of-me d-inline-flex bg-secondary" id="pic-of-me">
					<img
						src={meImg}
						class="img-fluid"
						alt="me"
						width="300"
						height="500"
					/>
				</div>
				<div className="about-me d-inline-flex justify-content-center">
					<TxtMap id="about" />
				</div>
			</section>

			<section className="hobbies" id="hobbies">
				<h1>Hobbies</h1>
				<section className="Bicycling d-flex border">
					<div className="my-bikes border">
						<h1>My Bicycles</h1>
						<div className="my-bikes-carolsel d-flex ">
							{/*Add carolsel here*/}
							<BikeCarousel />
						</div>
					</div>
					<article className="Bicycle fun">
						<TxtMap id="Fun" />
					</article>
					{/* !NOTE CHANGE CLASSNAME TO BIKEJOURNIES */}

					<div className="bike-journies d-flex flex-column border border-2 border-opaque-border rounded ">
						<h1>My Bicycle Journies</h1>
						{/*Image names are backwards */}

						<BikeTrips image={Bay} text="Niagra" />
						<BikeTrips image={Niagra} text="Georgian Bay" />
					</div>
				</section>

				<section className="warhammer d-flex flex-column">
					{/*add link for now*/}
					<h2>Warhammer 40k</h2>
					<div className="underConstruction">
						<TxtMap id="Warhammer Intro" />
						<h3>UNDER CONSTRUCTION</h3>
					</div>
				</section>
			</section>

			<section className="project" id="project">
				<h1>Projects & Certifications</h1>
				{/* will be made into a flex box */}
				<div className="project_grid d-grid">
					<h1>Projects</h1>
					<ProjectGrid />
				</div>
				<div className="certificates">
					<h1>CERTIFICATIONS</h1>
					<CertificateGrid />
				</div>
				<div className="github">
					{/* copy the github link from the eddie website */}
				</div>
			</section>

			<section className="contact" id="contact">
				<h1>contact</h1>
				<div className="feedback d-flex">
					<h3>Love to hear back from you</h3>
					<div className="phone&email">
						{/* <img src={} alt="" />
                <div className="p&e">
                  <h3>Email: edsDbug@gmail.com</h3>
                  <h3>Phone: 416-822-3939</h3>
                </div>
            */}
					</div>
					<div className="inTouch">
						<form className="form">
							<label htmlFor="name">Name</label>
							<input type={Text} name="name" placeholder="Name" />
							<label htmlFor="sName">Surname</label>
							<input type={Text} name="Surname" placeholder="Surname" />
							<label htmlFor="email">Email</label>
							<input type={Text} name="email" placeholder="enter email" />
							<label htmlFor="mssg">Mssg</label>
							<textarea
								name="mssg"
								rows="20"
								cols="70"
								placeholder="Enter your comment here..."
							/>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
