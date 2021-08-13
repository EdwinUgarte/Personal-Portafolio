import Head from "next/dist/next-server/lib/head";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import Navbar from "../components/NavBar";

const Trabajos = () => (
	<Box h="100%" w="100vw" backgroundColor="#95A5A6">
		<link
			href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
			rel="stylesheet"
		/>
		<Head>
			<title>Trabajos</title>
		</Head>
		<Navbar />
		<Box
			bgGradient="linear(65deg, black, #C60F00)"
			w="100%"
			height="50%"
			fontSize={{ base: "24px", md: "40px", lg: "56px" }}
			fontFamily="Lobster"
			paddingTop="20"
			paddingBottom="20"
			color="white"
			textAlign="center"
			boxShadow="10px 20px 20px #fff"
			textShadow="10px 10px 20px #111"
		>
			Algo de mi trabajo
		</Box>

		<Flex
			flexWrap="wrap"
			flexDirection="row"
			justifyContent="center"
			paddingTop="20"
			paddingBottom="20"
			h="100%"
			w="100%"
		>
			<Box
				color="blackAlpha.700"
				height="300px"
				w={[350, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link
					href="https://codepen.io/Ugarte1120/full/XWRNYzQ"
					target="-blank"
					_hover={{ color: "white" }}
				>
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
				color="blackAlpha.700"
				height="300px"
				w={[350, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link
					href="https://codepen.io/Ugarte1120/full/PombOjd"
					target="-blank"
					_hover={{ color: "white" }}
				>
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
				color="blackAlpha.700"
				height="300px"
				w={[350, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link
					href="https://codepen.io/Ugarte1120/full/WNjGMgY"
					target="-blank"
					_hover={{ color: "white" }}
				>
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
				color="blackAlpha.700"
				height="300px"
				w={[350, 400, 500]}
				textAlign="center"
				fontSize={{ base: "18px", md: "22px", lg: "25px" }}
				fontStyle="Bold"
				p="10"
				borderRadius="10"
				_hover={{ transform: "scale(1.03)" }}
			>
				<Link
					href="https://codepen.io/Ugarte1120/full/OJmWNOp"
					target="-blank"
					_hover={{ color: "white" }}
				>
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
		<Box
			backgroundColor="grey"
			textAlign="center"
			color="#fefefe"
			fontSize={{ base: "15px", md: "20px", lg: "25px" }}
			p="10"
			textShadow="10px 10px 20px #111"
		>
			<h1>Redes sociales</h1>
			<Box d="flex" justifyContent="center" flexDirection="row" p="10">
				<Link
					href="https://www.facebook.com/edwin.ortizugarte/"
					target="_blank"
					width={["80px", "80px", "100px"]}
					h="auto"
					paddingRight="10"
				>
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
						alt="Edwin Ugarte Facebook"
						alignItems="center"
						width="100%"
						maxH="auto"
					/>
				</Link>

				<Link
					href="https://github.com/EdwinUgarte"
					target="_blank"
					width={["80px", "100px", "150px"]}
					h="auto"
				>
					<Image
						src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png"
						alt="Edwin Ugarte GitHub"
						alignItems="center"
						width="100%"
						h="auto"
					/>
				</Link>
			</Box>
		</Box>
	</Box>
);

export default Trabajos;
