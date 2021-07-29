import Head from "next/dist/next-server/lib/head";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Container from "../components/Container";

const Trabajos = () => (
	<Box backgroundColor="black">
		<Container />
		<link
			href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
			rel="stylesheet"
		/>
		<Head>
			<title>Trabajos</title>
		</Head>

		<Box
			bgGradient="linear(65deg, black, #C60F00)"
			w="100%"
			height="50%"
			fontSize={{ base: "24px", md: "40px", lg: "56px" }}
			fontFamily="Lobster"
			paddingTop="40"
			paddingBottom="20"
			color="white"
			textAlign="center"
			boxShadow="1px 10px 20px #fff"
		>
			Algo de mi trabajo
		</Box>

		<Flex
			flexWrap="wrap"
			flexDirection="row"
			justifyContent="center"
			padding="10"
			h="100%"
			w="100%"
		>
			<Box
				color="whiteAlpha.900"
				height="300px"
				w={[300, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link href="https://codepen.io/Ugarte1120/full/XWRNYzQ" target="-blank">
					<Image
						src="https://i.ibb.co/wLdRg2z/product-page.png"
						alt="Edwin Ugarte"
						alignItems="center"
						width="100%"
						height="100%"
						borderRadius="10"
					/>
					Aterrizaje de un producto
				</Link>
			</Box>

			<Box
				color="whiteAlpha.900"
				height="300px"
				w={[300, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link href="https://codepen.io/Ugarte1120/full/PombOjd" target="-blank">
					<Image
						src="https://i.ibb.co/F4DZ0N8/form-page.png"
						alt="Edwin Ugarte"
						alignItems="center"
						width="100%"
						height="100%"
						borderRadius="10"
					/>
					Pagina Formulario
				</Link>
			</Box>

			<Box
				color="whiteAlpha.900"
				height="300px"
				w={[300, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link href="https://codepen.io/Ugarte1120/full/WNjGMgY" target="-blank">
					<Image
						src="https://i.ibb.co/JyJYNnr/tribute-page.png"
						alt="Edwin Ugarte"
						alignItems="center"
						width="100%"
						height="100%"
						borderRadius="10"
					/>
					Pagina Tributo
				</Link>
			</Box>

			<Box
				color="whiteAlpha.900"
				height="300px"
				w={[300, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link href="https://codepen.io/Ugarte1120/full/OJmWNOp" target="-blank">
					<Image
						src="https://i.ibb.co/f8LwnFY/Tecnical-page.png"
						alt="Edwin Ugarte"
						alignItems="center"
						width="100%"
						height="100%"
						borderRadius="10"
					/>
					Pagina Tecnica
				</Link>
			</Box>
		</Flex>
	</Box>
);

export default Trabajos;
