import Head from "next/dist/next-server/lib/head";
import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import Container from "../components/Container";

const Trabajos = () => (
	<div>
		<Head>
			<title>Trabajos</title>
		</Head>
		<Container />

		<Box
			bg="purple"
			w="100%"
			height="100%"
			fontSize="50px"
			paddingTop="40"
			paddingBottom="20"
			color="white"
			textAlign="center"
		>
			Algo de mi trabajo
		</Box>

		<SimpleGrid
			direction={["column", "column", "row", "row"]}
			justifyItems="center"
			columns={2}
			spacing="10"
			padding="10"
		>
			<Box
				color="#C0392B"
				height="300px"
				width="500px"
				textDecoration="none"
				textAlign="center"
				fontSize="28"
				p="10"
			>
				<a
					href="https://codepen.io/Ugarte1120/full/XWRNYzQ"
					target="-blank"
					textDecoration="none"
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
				</a>
			</Box>

			<Box
				color="#C0392B"
				height="300px"
				width="500px"
				textDecoration="none"
				textAlign="center"
				fontSize="28"
				p="10"
			>
				<a
					href="https://codepen.io/Ugarte1120/full/PombOjd"
					target="-blank"
					textDecoration="none"
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
				</a>
			</Box>

			<Box
				color="#C0392B"
				height="300px"
				width="500px"
				textDecoration="none"
				textAlign="center"
				fontSize="28"
				p="10"
			>
				<a
					href="https://codepen.io/Ugarte1120/full/WNjGMgY"
					target="-blank"
					textDecoration="none"
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
				</a>
			</Box>

			<Box
				color="#C0392B"
				height="300px"
				width="500px"
				textDecoration="none"
				textAlign="center"
				fontSize="28"
				p="10"
			>
				<a
					href="https://codepen.io/Ugarte1120/full/OJmWNOp"
					target="-blank"
					textDecoration="none"
				>
					<Image
						src="https://i.ibb.co/f8LwnFY/Tecnical-page.png"
						alt="Edwin Ugarte"
						alignItems="center"
						width="100%"
						height="100%"
						borderRadius="10"
					/>
					Pagina Tributo
				</a>
			</Box>
		</SimpleGrid>
	</div>
);

export default Trabajos;
