import './index.css';
import './styles.scss';

import { CertificateData } from './components/grids/CertificateData';
import { Bay, Niagra, meImg } from './Profile-Pics';
import {
	BikeCarousel,
	NavBar,
	TxtMap,
	BikeTrips,
	GenerateGrid,
	FormSpree,
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
					<GenerateGrid column="three" Data={CertificateData} />
				</div>
				<div className="certificates">
					<h1>CERTIFICATIONS</h1>
					<GenerateGrid column="two" Data={CertificateData} />
				</div>
				<div className="github">
					{/* copy the github link from the eddie website */}
				</div>
			</section>

			<section className="contact" id="contact">
				<h1>Contact</h1>

				<div className="GitLinked m-5">
					<h5 className="m-5">
						Feel free to check out my Github and Linkedin:
					</h5>
					<div>
						<a
							className="github-link btn btn-secondary mx-3"
							href="https://github.com/Eds-Dbug"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								fill="currentColor"
								class="bi bi-github"
								viewBox="0 0 16 16"
							>
								<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
							</svg>
							<h5 className="m-2">Github</h5>
						</a>
						<a
							className="btn btn-primary mx-3"
							href="https://www.linkedin.com/in/ed-tee-aa9ba0216/"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="39"
								height="39"
								fill="currentColor"
								class="bi bi-linkedin"
								viewBox="0 0 16 16"
							>
								<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
							</svg>
							<h5 className="m-2">Linkedin</h5>
						</a>
					</div>
				</div>

				<div className="d-flex justify-content-center m-5">
					<div className="contact-me  border border-2 border-opaque-border rounded">
						<h5 className="mb-3">Contact me @:</h5>
						<div className="d-inline-flex">
							<a
								className="email-adress btn btn-outline-primary m-3"
								href="mailto:email@email.com"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									fill="currentColor"
									class="bi bi-google"
									viewBox="0 0 16 16"
								>
									<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
								</svg>
								<h5>edsDbug@gmail.com</h5>
							</a>
							<a
								className="phone-number btn btn-outline-success m-3 "
								href="tel:4168223939"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									fill="currentColor"
									class="bi bi-telephone"
									viewBox="0 0 16 16"
								>
									<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
								</svg>
								<h5>416-822-3939</h5>
							</a>
						</div>
					</div>
				</div>

				<h2 className="m-5">OR</h2>
				<div className="d-flex justify-content-center">
					<div className="  MessageSubmit border border-2 border-opaque-border rounded">
						<FormSpree />
					</div>
				</div>
			</section>
		</div>
	);
}
