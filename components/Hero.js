import { Button } from "@chakra-ui/button";

const Hero = ({ subtitle, title }) => {
	const a = "Hola";
	const b = "A todos";
	const variant = () => {
		if (variant === "one") {
			<p>11111111</p>;
		}
	};

	return (
		<div>
			<h1>Ejemplo {subtitle || <h2>No mando nada</h2>}</h1>
			<p>
				{a} {b} - {title} - {variant}
			</p>
			<Button colorScheme="facebook" _hover={{ backgroundColor: "red" }}>
				Click Aqui
			</Button>
		</div>
	);
};

const Hero2 = ({ title, variant }) => {
	const a = "Hola";
	const b = "como te va";

	return (
		<div>
			<p>
				{a} {b} - {title} - {variant}
			</p>
		</div>
	);
};

export { Hero, Hero2 };
