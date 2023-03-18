import { motion } from "framer-motion";

interface patreonUserChildInterface {
	id: number;
	userID: bigint;
	name: string;
	avatar?: string;
	supporter: boolean;
	follower: boolean;
	enthusiast: boolean;
	disciple: boolean;
	sponsor: boolean;
	rank: number;
}

export default function PatreonAvatar({ id, name, avatar, rank }: patreonUserChildInterface) {
	const avatarURL = avatar
		? avatar
		: `https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024`;
	return (
		<div>
			{rank === 1 && (
				<motion.li
					key={id}
					whileHover={{ scale: 1.01 }}
					className="transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-48 lg:w-96 my-4 p-2 px-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden"
				>
					<div className="flex-shrink-0 truncate text-gray-700 text-left">
						<img
							className="w-32 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
							src={avatarURL}
							alt={`${name}'s Avatar`}
							style={{ textIndent: "100%" }}
						></img>
						<span className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400">
							{/* 
              <span className="transition duration-300 ease-in-out text-gray-200 group-hover:text-white">
                  {name}
              </span>
              */}
						</span>
					</div>

					<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
						<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-xl lg:text-2xl">
							{name}
						</div>
						{/*
            <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
             <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
              
            </div>
            */}
					</div>
				</motion.li>
			)}
			{rank === 2 && (
				<motion.li
					key={id}
					whileHover={{ scale: 1.01 }}
					className="transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-40 lg:w-80 my-4 p-2 px-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden"
				>
					<div className="flex-shrink-0 truncate text-gray-700 text-left">
						<img
							className=" w-24 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
							src={avatarURL}
							alt={`${name}'s Avatar`}
							style={{ textIndent: "100%" }}
						></img>
						<span className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400">
							{/* 
              <span className="transition duration-300 ease-in-out text-gray-200 group-hover:text-white">
                  {name}
              </span>
              */}
						</span>
					</div>

					<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
						{name.length > 15 ? (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-base">
								{name}
							</div>
						) : (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-lg">
								{name}
							</div>
						)}
						{/*
            <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
             <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
              
            </div>
            */}
					</div>
				</motion.li>
			)}
			{rank === 3 && (
				<motion.li
					key={id}
					whileHover={{ scale: 1.01 }}
					className="transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-32 lg:w-72 my-4 p-2 px-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden"
				>
					<div className="flex-shrink-0 truncate text-gray-700 text-left">
						<img
							className=" w-16 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
							src={avatarURL}
							alt={`${name}'s Avatar`}
							style={{ textIndent: "100%" }}
						></img>
						<span className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400">
							{/* 
              <span className="transition duration-300 ease-in-out text-gray-200 group-hover:text-white">
                  {name}
              </span>
              */}
						</span>
					</div>

					<div className="flex-grow lg:p-4 w-full md:w-auto overflow-hidden">
						{name.length > 15 ? (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-base">
								{name}
							</div>
						) : (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-lg">
								{name}
							</div>
						)}
						{/*
            <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
             <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
              
            </div>
            */}
					</div>
				</motion.li>
			)}
			{rank === 4 && (
				<motion.li
					key={id}
					whileHover={{ scale: 1.01 }}
					className="transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-28 lg:w-64 my-4 px-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden"
				>
					<div className="flex-shrink-0 truncate text-gray-700 text-left">
						<img
							className=" w-12 mt-4 lg:mt-0 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden"
							src={avatarURL}
							alt={`${name}'s Avatar`}
							style={{ textIndent: "100%" }}
						></img>
						<span className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400">
							{/* 
              <span className="transition duration-300 ease-in-out text-gray-200 group-hover:text-white">
                  {name}
              </span>
              */}
						</span>
					</div>

					<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
						{name.length > 15 ? (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-sm">
								{name}
							</div>
						) : (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-base">
								{name}
							</div>
						)}
						{/*
            <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
             <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
              
            </div>
            */}
					</div>
				</motion.li>
			)}
			{rank === 5 && (
				<motion.li
					key={id}
					whileHover={{ scale: 1.01 }}
					className="transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-60 my-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden"
				>
					<div className="flex-grow p-4 w-full md:w-auto overflow-hidden">
						{name.length > 15 ? (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-xs">
								{name}
							</div>
						) : (
							<div className="transition duration-1000 ease-in-out text-white text-center lg:text-left overflow-hidden text-sm">
								{name}
							</div>
						)}
						{/*
            <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
             <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
              
            </div>
            */}
					</div>
				</motion.li>
			)}
		</div>
	);
}

//{xp} / {level * level * 100} XP
