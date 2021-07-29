import Head from "next/head";
import Navbar from "./NavBar";

const Container = (props) => (
	<div>
		<Head />

		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/lux/bootstrap.min.css"
		/>
		<Navbar position="fixed" />
		<div className="container" padding-4px>
			{props.children}
		</div>
	</div>
);

export default Container;
