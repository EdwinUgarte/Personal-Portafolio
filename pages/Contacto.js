import Head from "next/dist/next-server/lib/head";
import {
	Box,
	FormControl,
	FormLabel,
	Input,
	Select,
	Textarea,
	Link,
	Image,
	Center,
	Button,
} from "@chakra-ui/react";

import Navbar from "../components/NavBar";

const Contacto = () => (
	<Box h="100%" backgroundColor="#95A5A6" w="100vw">
		<Navbar />
		<Head>
			<title>Contacto</title>
		</Head>

		<link
			href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
			rel="stylesheet"
		/>

		<Box
			d="flex"
			bgGradient="linear(65deg, black, #5DFF6F)"
			width="100%"
			height="50%"
			fontSize={{ base: "24px", md: "40px", lg: "56px" }}
			color="white"
			textAlign="center"
			fontFamily="Lobster"
			textShadow="20px 20px 20px #111"
			flexDirection="column"
			justifyContent="center"
			paddingTop="20"
			paddingBottom="20"
			boxShadow="10px 10px 20px #fff"
		>
			Contacto
		</Box>
		<Center w="100%" p="10" d="flex">
			<form id="formulario">
				<Box
					color="#47A451"
					boxShadow="20px 20px 20px grey "
					fontFamily="Lobster"
					backgroundColor="whiteAlpha.900"
					borderRadius="10"
					textAlign="center"
					w={["90vw", "90vw", "70vw", "60vw"]}
					fontSize={{ base: "15px", md: "20px", lg: "30px" }}
					p="10"
				>
					<h1>¡Comunicate conmigo!</h1>
					<br />

					<FormControl isRequired color="black" fontFamily="mono">
						<FormLabel>Nombre</FormLabel>
						<Input placeholder="Escribe tu nombre:" />
					</FormControl>
					<FormControl color="black" fontFamily="mono">
						<FormLabel>Apellidos</FormLabel>
						<Input placeholder="Escribe tus apellidos:" />
					</FormControl>
					<FormControl isRequired color="black" fontFamily="mono">
						<FormLabel>Email</FormLabel>
						<Input type="email" placeholder="Escribe tus Email:" />
					</FormControl>
					<FormControl color="black" fontFamily="mono">
						<FormLabel>Ocupación</FormLabel>
						<Select placeholder="Selecciona">
							<option>Estudiante</option>
							<option>Trabajador por cuenta propia</option>
							<option>Empresa</option>
							<option>Otro</option>
						</Select>
						<FormLabel />
					</FormControl>
					<FormControl color="black" fontFamily="mono">
						<FormLabel>
							Alguna observacion:
							<Textarea
								color="black"
								fontFamily="mono"
								placeholder="Escribe tu opinion:"
							/>
						</FormLabel>
					</FormControl>

					<Button mt={4} colorScheme="green" type="submit">
						Enviar
					</Button>
				</Box>
			</form>
		</Center>
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

export default Contacto;
