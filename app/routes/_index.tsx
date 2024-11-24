import type { MetaFunction } from "@remix-run/node";
import mainImage from "../images/main-image.jpeg";

export const meta: MetaFunction = () => {
	return [{ title: "Adam Rankin" }];
};

export default function Index() {
	return (
		<main className="mx-2 md:mx-32 flex flex-col items-center space-y-10">
			<img
				src={mainImage}
				className="w-auto h-auth max-h-80 rounded-md"
				alt="Super Dope Snowboarding Photo"
			/>
			<p>
				Hey, I'm Adam. I am the CTO of{" "}
				<a href="https://joinwarp.com" className="font-bold hover:underline">
					Warp
				</a>{" "}
				and I enjoy studying software and math and building delightful products
				with them. When I'm not building products I'm running, hiking, or
				skiing. I'm currently living in New York City though I spend a lot of
				time in Florida and the Rocky Mountains. I plan to use this site as a
				place to put things I may be working on or thinking about.
			</p>
		</main>
	);
}
