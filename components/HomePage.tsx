import React from "react";
import { Popover } from "@headlessui/react";
import { CogIcon, ChatBubbleOvalLeftEllipsisIcon, FireIcon, UsersIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
export default function HomePage({
	animation,
	usersCount,
	serversCount,
	bottomAnimation,
	features,
}: {
	animation: Variants;
	usersCount: number;
	serversCount: number;
	bottomAnimation: Variants;
	features: {
		name: string;
		description: string;
		icon: typeof CogIcon | typeof ChatBubbleOvalLeftEllipsisIcon | typeof FireIcon | typeof UsersIcon;
	}[];
}) {
	return (
		<div>
			<Head>
				<title>Bento 🍱</title>
			</Head>
			<NextSeo
				description={`Bento 🍱 - A Discord bot with server moderation tools and various entertaining commands.`}
				openGraph={{
					title: `Bento 🍱`,
				}}
				additionalMetaTags={[
					{
						name: "summary",
						content: `Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most`,
					},
				]}
			/>
			<div className="relative bg-gray-800 overflow-hidden">
				<div className="max-w-7xl mx-auto">
					<div className="relative z-10 pb-8 bg-gray-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
						<svg
							className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-800 transform translate-x-1/2"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>

						<Popover>
							{() => (
								<>
									<div className="relative pt-6 px-4 sm:px-6 lg:px-8">
										<nav
											className="relative flex items-center justify-between sm:h-10 lg:justify-start"
											aria-label="Global"
										>
											<div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
												<div className="flex items-center justify-between w-full md:w-auto">
													<div className="-mr-2 flex items-center md:hidden"></div>
												</div>
											</div>
											<div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8"></div>
										</nav>
									</div>
								</>
							)}
						</Popover>

						<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
							<motion.div className="sm:text-center lg:text-left">
								<motion.h1
									className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
									initial="hidden"
									animate="show"
									variants={animation}
								>
									<span className="block xl:inline">The Discord Bot</span>{" "}
									<span className="block text-yellow-300 xl:inline">Bento</span>
								</motion.h1>
								<motion.p
									className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
									initial="hidden"
									animate="show"
									variants={animation}
								>
									A Verified Discord bot with media and entertainment commands.
								</motion.p>
								<motion.p
									className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
									initial="hidden"
									animate="show"
									variants={animation}
								>
									A Bento Box 🍱 is ready for {Math.floor(usersCount / 100) / 10.0 + "k"} Users on {serversCount - 6}{" "}
									Servers
								</motion.p>
								<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
									<div className="rounded-md shadow">
										<motion.a
											href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=1644167687254&scope=bot%20applications.commands"
											className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
											whileHover={{
												scale: 1.02,
											}}
											whileTap={{
												scale: 0.9,
											}}
											initial="hidden"
											animate="show"
											variants={animation}
										>
											Add Bento to your server
										</motion.a>
									</div>
									<div className="mt-3 sm:mt-0 sm:ml-3 shadow-lg">
										<Link href="/commands">
											<motion.span
												className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
												whileHover={{
													scale: 1.02,
												}}
												whileTap={{
													scale: 0.9,
												}}
												initial="hidden"
												animate="show"
												variants={animation}
											>
												View Commands
											</motion.span>
										</Link>
									</div>
								</div>
							</motion.div>
						</main>
					</div>
				</div>
				<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-yellow-300 flex justify-center items-center">
					<Image className="self-center" src="/bento_trans.png" alt="Bento logo" height={250} width={250} />
				</div>
			</div>
			<div className="py-12 bg-gray-900">
				<motion.div
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
					initial="hidden"
					animate="show"
					variants={bottomAnimation}
				>
					<motion.div
						className="lg:text-center"
						whileHover={{
							scale: 1.02,
						}}
					>
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
							The bot you did not know you needed
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
							Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you
							need it the most
						</p>
					</motion.div>

					<div className="mt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							{features.map((feature) => (
								<motion.div
									key={feature.name}
									className="relative bg-gray-800 px-6 py-6 rounded shadow-lg"
									whileHover={{
										scale: 1.02,
									}}
									initial="hidden"
									animate="show"
									variants={animation}
								>
									<dt>
										<motion.div
											whileHover={{
												rotate: 360,
												transition: {
													type: "spring",
													duration: 1.5,
													bounce: 0.25,
												},
											}}
											className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white"
										>
											<feature.icon className="h-6 w-6" aria-hidden="true" />
										</motion.div>
										<p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
									</dt>
									<dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
								</motion.div>
							))}
						</dl>
					</div>
					<br></br>
					<div className="lg:text-center">
						<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
							Check all commands by clicking below!
						</p>
						<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">
							<div className="rounded-md shadow">
								<Link href="/commands">
									<motion.span
										className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
										whileHover={{
											scale: 1.05,
										}}
										whileTap={{
											scale: 0.9,
										}}
									>
										A list of All Commands
									</motion.span>
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
