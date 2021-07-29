import Link from "next/link";

const Navbar = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container-fluid">
			<Link href="/">
				<a className="navbar-brand">Ugarte</a>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link href="/Trabajos">
							<a className="nav-link active" aria-current="page">
								Trabajos
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/Contacto">
							<a className="nav-link active" aria-current="page">
								Contacto
							</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
export default Navbar;
