import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";

const Navbar = () => (
	<Flex
		justifyContent="space-between"
		padding="10px 10px"
		bg="#013142 "
		w="100vw"
		h="10%"
		color="white"
		fontSize={{ base: "13px", md: "20px", lg: "25px" }}
		fontFamily="Kanit"
	>
		<>
			<link
				href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap"
				rel="stylesheet"
			/>
		</>
		<Box padding="0px 15px" _hover={{ color: "whiteAlpha.800" }}>
			<Link href="/">Ugarte </Link>
		</Box>
		<Box d="flex" paddingRight="5">
			<Box paddingRight="15px" _hover={{ color: "whiteAlpha.800" }}>
				<Link href="/Trabajos">Trabajos</Link>
			</Box>
			<Box paddingRight="15px" _hover={{ color: "whiteAlpha.800" }}>
				<Link href="/Contacto">Contacto</Link>
			</Box>
		</Box>
	</Flex>
);
export default Navbar;
