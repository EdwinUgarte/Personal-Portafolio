import Head from "next/head";
import { Flex, Image, Box, Link, Text } from "@chakra-ui/react";

import Navbar from "../components/NavBar";

const Inicio = () => (
	<Box bgColor="#95A5A6" width="100vw" h="100vh">
		<link
			href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
			rel="stylesheet"
		/>
		<Head>
			<title>Ugarte</title>
		</Head>
		<Navbar />
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
		<Flex width="100%" h="auto">
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
						w={["100px", "200px", "200px", "300px"]}
						h={["50px", "100px", "100px", "150px"]}
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
						w={["100px", "200px", "200px", "300px"]}
						h={["50px", "100px", "100px", "150px"]}
						_hover={{ transform: "scale(1.04)" }}
					/>
				</Link>
			</Box>
		</Flex>
		<Flex width="100%" h={["200px", "200px", "200px", "400px"]} bg="grey">
			<Box width="100%" h="auto">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/117314939_3297063327008586_3042356753556346198_n.jpg?_nc_cat=109&ccb=1-4&_nc_sid=174925&_nc_eui2=AeFVUNs0Agp8Hx2XWTxQyjrJplQUjvFUxoamVBSO8VTGhmak1XxylfrXIujPfC3ZN_XYW7PniP5iGKS6BXS9y2lC&_nc_ohc=hRl9XlVT04AAX-nXbh6&_nc_ht=scontent.fmex37-1.fna&oh=c5ab53f9b908abd39beb9ed20e577395&oe=613311DF"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					h="100%"
				/>
			</Box>

			<Box width="100%" h="auto">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/59909898_2268312993216963_5177543733427568640_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeF4A70mZPJruzfR9j0niJcaP-Kw_sWU9dg_4rD-xZT12BmrY0NBTPCps2Ry5JLZrzMYLmnPKrYqcfTPIrzETjz1&_nc_ohc=8CjW-gby7VgAX-4bbv9&_nc_ht=scontent.fmex37-1.fna&oh=77ca2148523b6565deb836fb07751491&oe=6128CA02"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					h="100%"
				/>
			</Box>
			<Box width="100%" h="auto">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/85183937_2849955208386069_3995179497862201344_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeFe0sOi1-rpGdzE7RV61raBWs6arj9ae9NazpquP1p701QneSqAWzqblejcPWM1-Y5wJC9jnvO8rUzEIQ0VVHxE&_nc_ohc=4CR7acMw6mcAX-LIKxZ&_nc_ht=scontent.fmex37-1.fna&oh=1eb425e6068ed965aeea01a730687a35&oe=6127D549"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					h="100%"
				/>
			</Box>
		</Flex>
		<Flex flexWrap="wrap">
			<Box
				w={["50%", "50%", "50%"]}
				bg="#E67E22"
				textAlign="center"
				fontFamily="cursive"
				lineHeight={["2", "5", "10"]}
				p={["2", "5", "10"]}
				fontSize={{ base: "10px", md: "20px", lg: "25px" }}
				color="whiteAlpha.800"
			>
				<Text fontSize={{ base: "15px", md: "30px", lg: "45px" }}>Sobre mi:</Text>
				<Text>
					Soy una persona a la que le gustan los retos, me gusta lograr y alcanzar
					objetivos, me encanta que todo sea diseñado de acuerdo a las experiencias del
					usuario, mi mayor deseo es la aceptación visual y funcional a nivel del usuario
					final.
				</Text>
			</Box>
			<Box
				w={["50%", "50%", "50%"]}
				bg="#34495E"
				textAlign="center"
				fontFamily="cursive"
				lineHeight={["2", "5", "10"]}
				p={["2", "5", "10"]}
				fontSize={{ base: "10px", md: "20px", lg: "25px" }}
				color="whiteAlpha.800"
			>
				<Text
					fontFamily="Lobster"
					color="whiteAlpha.800"
					fontSize={["10px", "20px", "30px"]}
				>
					<br />
					El único modo de hacer un gran trabajo es amar lo que haces <br />- Steve Jobs
				</Text>
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

export default Inicio;
