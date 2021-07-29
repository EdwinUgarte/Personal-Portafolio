import Head from "next/head";
import { Flex, Image, Box } from "@chakra-ui/react";

import Container from "../components/Container";

const Inicio = () => (
	<div>
		<Head>
			<title>Ugarte</title>
		</Head>
		<Container />

		<Box
			bg="tomato"
			w="100vw"
			height="100%"
			fontSize="80px"
			paddingTop="10%"
			paddingBottom="10%"
			color="white"
			textAlign="center"
			fontFamily="monospace"
			p="200"
		>
			Ing Edwin Ugarte
		</Box>
		<Flex>
			<Box
				p="10"
				w="50%"
				color="white"
				textAlign="center"
				fontFamily="fantasy"
				fontSize="18px"
				bg="grey"
			>
				<a
					href="https://www.uaeh.edu.mx/"
					target="_blank"
					textDecoration="none"
					rel="noreferrer"
				>
					Egresado de la UAEH
				</a>
			</Box>

			<Box
				p="10"
				w="50%"
				color="white"
				textAlign="center"
				fontFamily="fantasy"
				fontSize="18px"
				bg="#AF7AC5 "
			>
				<a href="https://codepen.io/pen/" target="_blank" rel="noreferrer">
					¡Si lo piensas, lo creas!
				</a>
			</Box>
		</Flex>
		<Flex>
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/185980349_4076648385716739_5423786365248012213_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGd6BjuDYn1BdAOu0ZU4JWve7dEmgOC63R7t0SaA4LrdMPDYk790R2aJ_kqdS6vh7HtJgmEwCEdR9g8Gv6BoH38&_nc_ohc=ZsmE9D-Nwi4AX8p_pUM&tn=aw4AZn0OScVgY8hq&_nc_ht=scontent.fmex37-1.fna&oh=08bd061fa2e88427d6cf12ba0ee8e7a6&oe=612686BD"
					alt="Edwin Ugarte"
					alignItems="center"
					width="200%"
					maxH="500px"
				/>
			</Box>
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/59909898_2268312993216963_5177543733427568640_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeF4A70mZPJruzfR9j0niJcaP-Kw_sWU9dg_4rD-xZT12BmrY0NBTPCps2Ry5JLZrzMYLmnPKrYqcfTPIrzETjz1&_nc_ohc=8CjW-gby7VgAX-4bbv9&_nc_ht=scontent.fmex37-1.fna&oh=77ca2148523b6565deb836fb07751491&oe=6128CA02"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					maxH="500px"
				/>
			</Box>
			<Box boxSize="sm" width="33.3%">
				<Image
					src="https://scontent.fmex37-1.fna.fbcdn.net/v/t1.6435-9/85183937_2849955208386069_3995179497862201344_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=19026a&_nc_eui2=AeFe0sOi1-rpGdzE7RV61raBWs6arj9ae9NazpquP1p701QneSqAWzqblejcPWM1-Y5wJC9jnvO8rUzEIQ0VVHxE&_nc_ohc=4CR7acMw6mcAX-LIKxZ&_nc_ht=scontent.fmex37-1.fna&oh=1eb425e6068ed965aeea01a730687a35&oe=6127D549"
					alt="Edwin Ugarte"
					alignItems="center"
					width="100%"
					maxH="450px"
				/>
			</Box>
		</Flex>
	</div>
);

export default Inicio;
