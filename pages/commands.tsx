import Head from "next/head";
import { commandsCategoryList, commandsList } from "../util/commandsJSONList";
import { motion } from "framer-motion";
import { adminCommands } from "../components/commands/admin";
import { featureCommands } from "../components/commands/features";
import { infoCommands } from "../components/commands/info";
import { moderationCommands } from "../components/commands/moderation";
import { userCommands } from "../components/commands/user";
import React, { useState } from "react";
import { capitalize } from "../util/capitalize";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import PrefixExample from "../components/discordMessages/prefixExample";
import PrefixExample2 from "../components/discordMessages/prefixExample2";
import Link from "next/link";

const Admin = dynamic(() => import("../components/commands/admin"));
const Features = dynamic(() => import("../components/commands/features"));
const Info = dynamic(() => import("../components/commands/info"));
const Moderation = dynamic(() => import("../components/commands/moderation"));
const User = dynamic(() => import("../components/commands/user"));

export default function Commands() {
	const [showModal, setShowModal] = useState(false);
	const [showCommand, setCommand] = useState("");

	function buttonFunction(category: string) {
		setShowModal(true);
		setCommand(category);
	}

	return (
		<div>
			<Head>
				<title>Bento 🍱 | Commands</title>
			</Head>
			<NextSeo
				description="Want to know what Bento 🍱 can do on your Discord Server? Get information about every Discord command available with Bento 🍱 on this page."
				openGraph={{
					title: "Bento 🍱 | Commands",
				}}
				additionalMetaTags={[
					{
						name: "summary",
						content:
							"Want to know what Bento 🍱 can do on your Discord Server? Get information about every command available with Bento 🍱 on this page.",
					},
				]}
			/>
			<div className="py-6 lg:py-12 bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div>
						<h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center sm:mx-auto">
							Bento 🍱 Commands
						</h1>
						<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto">
							The default prefix for Bento 🍱 is <code>?</code>. <br />
							If you do not know the prefix for the current server, you can also mention Bento 🍱 as a prefix.
						</p>
						<div className="mt-4 max-w-lg sm:mx-auto">
							<PrefixExample />
						</div>
						<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto">
							Or receive the prefix by just mentioning Bento 🍱
						</p>
						<div className="mt-4 max-w-lg sm:mx-auto">
							<PrefixExample2 />
						</div>
						<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto">
							Required arguments are specified with <code>{`<greater or less than signs>`}</code>.
						</p>
						<p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center sm:mx-auto">
							Optional arguments are in <code>[brackets]</code>.
						</p>
						<div className="mt-4 mb-8 sm:mt-8 sm:flex sm:justify-center lg:text-center">
							<div className="rounded-md shadow">
								<Link href={`/commands#${commandsList[Math.floor(Math.random() * commandsList.length)].name}`}>
									<motion.span
										className="w-full sm:text-center sm:mx-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-300 hover:text-black md:py-4 md:text-lg md:px-10"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.9 }}
									>
										Check a Random Command
									</motion.span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center sm:mx-auto">
							Command Categories
						</h2>
					</div>
					<br></br>
					<motion.div className="bg-gray-900 px-6 py-2 rounded shadow-2xl">
						{commandsCategoryList.map((category, i) => (
							<div key={i}>
								<motion.div className=" text-gray-300 py-2 group">
									<Link href={`#${category.category.toLowerCase()}`} className="text-yellow-400 hover:underline">
										{category.category}
									</Link>
									{" - "}
									{category.description}
									<div className="mt-2 text-center">
										<button
											className="w-full sm:text-center opacity-100 lg:opacity-50 outline-none group-hover:opacity-100 sm:mx-auto flex items-center justify-center px-8 py-3 font-medium text-black bg-yellow-400 hover:bg-yellow-300 hover:text-black md:py-4 md:text-lg md:px-10"
											type="button"
											onClick={() => buttonFunction(category.category)}
										>
											List of {category.category} Commands
										</button>
										{/* https://stackoverflow.com/questions/59251095/how-to-use-modal-inside-a-map-function */}
									</div>
								</motion.div>
							</div>
						))}
						{showModal ? (
							<>
								<div
									className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
									onMouseLeave={() => setShowModal(false)}
									onClick={() => setShowModal(false)}
								>
									<motion.div className="relative w-auto my-6 mx-auto max-w-3xl py-6 px-6">
										{/*content*/}
										<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-80 bg-gray-900 outline-none py-1 px-2">
											{/*header*/}
											<div className="flex items-start justify-between py-2 w-full border-b border-solid border-gray-400 rounded-t">
												<h3 className="text-xl font-semibold text-yellow-400">{showCommand} Commands</h3>
											</div>
											{/*body*/}
											<div className="relative p-1 flex-auto">
												{showCommand !== "Admin" ? null : (
													<div>
														{adminCommands.map((command, i) => (
															<div key={i}>
																<motion.div className=" text-gray-300 group text-sm whitespace-pre-line max-w-xl mx-auto">
																	<Link
																		href={`#${command.name.toLowerCase()}`}
																		className="text-yellow-400 hover:underline"
																	>
																		{capitalize(command.name)}
																	</Link>
																	{command.aliases.length
																		? ` (${command.aliases.map((alias) => alias).join(", ")})`
																		: null}
																</motion.div>
															</div>
														))}
													</div>
												)}
												{showCommand !== "Features" ? null : (
													<div>
														{featureCommands.map((command, i) => (
															<div key={i}>
																<motion.div className=" text-gray-300 group text-sm whitespace-pre-line max-w-xl mx-auto">
																	<Link
																		href={`#${command.name.toLowerCase()}`}
																		className="text-yellow-400 hover:underline"
																	>
																		{capitalize(command.name)}
																	</Link>
																	{command.aliases.length
																		? ` (${command.aliases.map((alias) => alias).join(", ")})`
																		: null}
																</motion.div>
															</div>
														))}
													</div>
												)}
												{showCommand !== "Info" ? null : (
													<div>
														{infoCommands.map((command, i) => (
															<div key={i}>
																<motion.div className=" text-gray-300 group text-sm whitespace-pre-line max-w-xl mx-auto">
																	<Link
																		href={`#${command.name.toLowerCase()}`}
																		className="text-yellow-400 hover:underline"
																	>
																		{capitalize(command.name)}
																	</Link>
																	{command.aliases.length
																		? ` (${command.aliases.map((alias) => alias).join(", ")})`
																		: null}
																</motion.div>
															</div>
														))}
													</div>
												)}
												{showCommand !== "Moderation" ? null : (
													<div>
														{moderationCommands.map((command, i) => (
															<div key={i}>
																<motion.div className=" text-gray-300 group text-sm whitespace-pre-line max-w-xl mx-auto">
																	<Link
																		href={`#${command.name.toLowerCase()}`}
																		className="text-yellow-400 hover:underline"
																	>
																		{capitalize(command.name)}
																	</Link>
																	{command.aliases.length
																		? ` (${command.aliases.map((alias) => alias).join(", ")})`
																		: null}
																</motion.div>
															</div>
														))}
													</div>
												)}
												{showCommand !== "User" ? null : (
													<div>
														{userCommands.map((command, i) => (
															<div key={i}>
																<motion.div className=" text-gray-300 group text-sm whitespace-pre-line max-w-xl mx-auto">
																	<Link
																		href={`#${command.name.toLowerCase()}`}
																		className="text-yellow-400 hover:underline"
																	>
																		{capitalize(command.name)}
																	</Link>
																	{command.aliases.length
																		? ` (${command.aliases.map((alias) => alias).join(", ")})`
																		: null}
																</motion.div>
															</div>
														))}
													</div>
												)}
											</div>
											{/*footer*/}
											<div className="flex items-center justify-end p-2 border-t border-solid border-gray-400 rounded-b">
												<button
													className="text-red-500 sm:text-center sm:mx-auto background-transparent font-bold uppercase px-6 py-2 text-sm outline-none mr-1 mb-1 ease-linear transition-all duration-150"
													type="button"
													onClick={() => setShowModal(false)}
												>
													Close
												</button>
											</div>
										</div>
									</motion.div>
								</div>
								<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
							</>
						) : null}
					</motion.div>
				</div>
				<br />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2
							id="admin"
							className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl"
						>
							<Link href={`#admin`} className="text-yellow-400 hover:underline">
								Admin
							</Link>
						</h2>
					</div>
					<br></br>
					<div className="bg-gray-900 px-0 lg:px-6 py-0 lg:py-2 rounded shadow-2xl">
						<Admin />
					</div>
				</div>
				<br />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2
							id="features"
							className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl"
						>
							<Link href={`#features`} className="text-yellow-400 hover:underline">
								Features
							</Link>
						</h2>
					</div>
					<br></br>
					<div className="bg-gray-900 px-0 lg:px-6 py-0 lg:py-2 rounded shadow-2xl">
						<Features />
					</div>
				</div>
				<br />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2
							id="info"
							className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl"
						>
							<Link href={`#info`} className="text-yellow-400 hover:underline">
								Info
							</Link>
						</h2>
					</div>
					<br></br>
					<div className="bg-gray-900 px-0 lg:px-6 py-0 lg:py-2 rounded shadow-2xl">
						<Info />
					</div>
				</div>
				<br />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2
							id="moderation"
							className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl"
						>
							<Link href={`#moderation`} className="text-yellow-400 hover:underline">
								Moderation
							</Link>
						</h2>
					</div>
					<br></br>
					<div className="bg-gray-900 px-0 lg:px-6 py-0 lg:py-2 rounded shadow-2xl">
						<Moderation />
					</div>
				</div>
				<br />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<h2
							id="user"
							className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-yellow-400 sm:text-4xl"
						>
							<Link href={`#user`} className="text-yellow-400 hover:underline">
								User
							</Link>
						</h2>
					</div>
					<br></br>
					<div className="bg-gray-900 px-0 lg:px-6 py-0 lg:py-2 rounded shadow-2xl">
						<User />
					</div>
				</div>
			</div>
		</div>
	);
}
