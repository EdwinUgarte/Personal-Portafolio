import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./NavBar";

const Container = (props) => (
	<Box>
		<Head />

		<Navbar color position="fixed" />
		<Box className="container" padding="4px">
			{props.children}
		</Box>
	</Box>
);

export default Container;
