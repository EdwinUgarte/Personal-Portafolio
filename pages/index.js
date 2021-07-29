import Head from "next/head";
import { Flex, Image, Box, Link } from "@chakra-ui/react";
import Container from "../components/Container";

const Inicio = () => (
	<Box bgColor="#222" width="100vw" h="100vh">
		<link
			href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
			rel="stylesheet"
		/>
		<Head>
			<title>Ugarte</title>
		</Head>
		<Container />

		<Box
			d="flex"
			bgGradient="linear(65deg, black, #205D9B)"
			width="100%"
			height="50%"
			fontSize={{ base: "24px", md: "40px", lg: "56px" }}
			color="white"
			textAlign="center"
			fontFamily="Lobster"
			textShadow="20px 20px 20px #111"
			flexDirection="column"
			justifyContent="center"
		>
			Ing Edwin Ugarte
		</Box>
		<Flex width="100%">
			<Box
				p="10"
				w="50vw"
				color="white"
				fontFamily="fantasy"
				fontSize="18px"
				bg="#34495E"
				d="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Link href="https://www.uaeh.edu.mx/" target="_blank">
					<Image
						src="https://www.uaeh.edu.mx/imagen/imagenes/2020/recursos/uaeh.png"
						alt="UAEH-LOGO"
						w="300"
						h="100"
						_hover={{ transform: "scale(1.04)" }}
					/>
				</Link>
			</Box>

			<Box
				p="10"
				w="50vw"
				color="white"
				textAlign="center"
				fontFamily="fantasy"
				fontSize="18px"
				bg="#E67E22"
				d="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Link href="https://nextjs.org/" target="_blank">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
						alt="UAEH-LOGO"
						w="400"
						h="110"
						_hover={{ transform: "scale(1.04)" }}
					/>
				</Link>
			</Box>
		</Flex>
		<Flex width="100vw">
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/185980349_4076648385716739_5423786365248012213_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGd6BjuDYn1BdAOu0ZU4JWve7dEmgOC63R7t0SaA4LrdMPDYk790R2aJ_kqdS6vh7HtJgmEwCEdR9g8Gv6BoH38&_nc_ohc=ZsmE9D-Nwi4AX8p_pUM&tn=aw4AZn0OScVgY8hq&_nc_ht=scontent.fmex37-1.fna&oh=08bd061fa2e88427d6cf12ba0ee8e7a6&oe=612686BD"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					maxH="400px"
				/>
			</Box>
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/59909898_2268312993216963_5177543733427568640_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeF4A70mZPJruzfR9j0niJcaP-Kw_sWU9dg_4rD-xZT12BmrY0NBTPCps2Ry5JLZrzMYLmnPKrYqcfTPIrzETjz1&_nc_ohc=8CjW-gby7VgAX-4bbv9&_nc_ht=scontent.fmex37-1.fna&oh=77ca2148523b6565deb836fb07751491&oe=6128CA02"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					maxH="400px"
				/>
			</Box>
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/85183937_2849955208386069_3995179497862201344_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeFe0sOi1-rpGdzE7RV61raBWs6arj9ae9NazpquP1p701QneSqAWzqblejcPWM1-Y5wJC9jnvO8rUzEIQ0VVHxE&_nc_ohc=4CR7acMw6mcAX-LIKxZ&_nc_ht=scontent.fmex37-1.fna&oh=1eb425e6068ed965aeea01a730687a35&oe=6127D549"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					maxH="400px"
				/>
			</Box>
		</Flex>
	</Box>
);

export default Inicio;
