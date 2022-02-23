import links from './data';

const NavBar = () => {
	const handleClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute('href');
		const location = document.querySelector(target).offsetTop;

		window.scrollTo({
			left: 0,
			top: location - 60,
		});
	};
	return (
		<nav className="navbar navbar-expand-sm bg-dark fixed-top">
			<ul className="navbar-nav mr">
				{links.map((link) => {
					return (
						<a
							className="nav-padding btn btn-outline-success"
							href={link.url}
							key={link.id}
							onClick={handleClick}
						>
							{link.name}
						</a>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
