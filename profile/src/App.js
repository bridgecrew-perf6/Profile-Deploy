import './index.css';
import './styles.scss';
import NavBar from './components/navBar';
import meImg from './Profile-Pics/me.jpg';
import text from './components/text';
import BikeCarousel from './components/bikeCarousel';
import TxtMap from './components/TxtMap';

export default function App() {
	return (
		<div className="bg-light-blue">
			<NavBar />
			<section className="about" id="about">
				<h1>About</h1>
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
					{<TxtMap id="about" />}
				</div>
			</section>

			<section className="hobbies" id="hobbies">
				<h1>Hobbies</h1>
				<section className="Bicycling d-flex border">
					<article className="Bicycle Fufillment">
						<TxtMap id="Fufillment" />
					</article>
					<div className="my-bikes border">
						<h1>My Bicycles</h1>
						<div className="my-bikes-carolsel d-flex ">
							{/*Add carolsel here*/}
							<BikeCarousel />
						</div>
					</div>
					{/* !NOTE CHANGE CLASSNAME TO BIKEJOURNIES */}
					<div className="bike-trips d-flex border">
						{/*multiple trips divs each with, text, google maps positions
            //NIAGRA TRIP*/}
						<div className="niagraTrip">
							{/* replace with component
                  <map&text map={} text={}/>
              */}
							<div className="map&text">
								{/*<img src={"#"} alt="#"/>  */}
								{/*
                  going to add another one of those functions
                  into here but will probably make it into a component
                  e.g < />
                 */}
							</div>
						</div>
						{/*Georgian Bay Trips*/}
						<div className="georgianBayTrip">
							{/* <map&text map={} text={}/>
                  <map&text map={} text={}/>
                  <map&text map={} text={}/>
                  <map&text map={} text={}/>
                  ...
              */}
						</div>
					</div>
				</section>

				<section className="warhammer d-flex border">
					{/*add link for now*/}
					<h2>Warhammer 40k</h2>
					<div className="underConstruction">
						{/* <img src={} alt="hardHat"/> */}
						<h3>UNDER CONSTRUCTION</h3>
					</div>
				</section>
			</section>

			<section className="project" id="project">
				<h2>Projects</h2>
				{/* will be made into a flex box */}
				<div className="project_grid d-grid">
					{/* <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
                <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
                <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
                <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
                <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
                <div className="grid-item"><a href={}><img src={} alt="" /></a></div>
            */}
				</div>
				<div className="certificates">
					<div className="cert">
						{/* <a href="#"/> <img src={} alt="" /> </a> 
                <a href="#"/> <img src={} alt="" /> </a> 
            */}
					</div>
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
							<input type={text} name="name" placeholder="Name" />
							<label htmlFor="sName">Surname</label>
							<input type={text} name="Surname" placeholder="Surname" />
							<label htmlFor="email">Email</label>
							<input type={text} name="email" placeholder="enter email" />
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
