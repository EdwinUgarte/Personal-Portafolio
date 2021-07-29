import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => (
	<Flex
		justifyContent="start"
		padding="10px 10px"
		position="fixed"
		bgGradient="linear(90deg,  #292827, black 20%)"
		fontWeight="Bold"
		w="100vw"
		h="10%;"
		color="white"
		fontSize="22"
		fontFamily="Lobster"
		boxShadow="1px 10px 20px #000"
	>
		<Box>
			<link
				href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
				rel="stylesheet"
			/>
		</Box>
		<Box padding="0px 15px" _hover={{ color: "#FC8A11" }}>
			<Link href="/">Ugarte </Link>
		</Box>
		<Box paddingRight="15px" _hover={{ color: "#FC8A11" }}>
			<Link href="/Trabajos">Trabajos</Link>
		</Box>
		<Box paddingRight="15px" _hover={{ color: "#FC8A11" }}>
			<Link href="/Contacto">Contacto</Link>
		</Box>
	</Flex>
);
export default Navbar;
