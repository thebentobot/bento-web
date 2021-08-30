import { motion } from "framer-motion"
import { useState } from "react";

interface LeaderboardChildRankingsInterface {
    rank: string,
    level: number,
    xp: number,
    userID: string,
    avatarURL: string,
    username: string,
    discriminator: string
}

const Progress = ({done}: any) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 0.75,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 500);
	
	return (
		<div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
			<div className="progress-done" style={style}>
			</div>
		</div>
	)
}

export default function LeaderboardChild({userID, rank, level, xp, username, discriminator, avatarURL}: LeaderboardChildRankingsInterface) {
  const avatar = avatarURL ? avatarURL : `https://cdn.discordapp.com/embed/avatars/${Number(discriminator) % 5}.png`
  let topUsersStyle = {};

    switch (Number(rank)) {
      case 1:
        topUsersStyle = {
          color: '#FFD700',
          fontWeight: 1000,
        };
      break;
      case 2:
        topUsersStyle = {
          color: "#C0C0C0",
          fontWeight: 700,
        };
      break;
      case 3:
        topUsersStyle = {
          color: "#CD7F32",
          fontWeight: 500,
        };
      break;
    }

    const percent = (xp / (level * level * 100)) * 100

    //let controls = useAnimation()
    //controls.start({width: `${percent}%`, transition: {duration: 3, ease: 'easeIn'}})
    return (
      <motion.li whileHover={{scale: 1.01}} className='transition duration-300 ease-in-out bg-gray-900 flex flex-wrap items-center w-full my-4 p-2 px-4 rounded-lg group hover:bg-gray-700 hover:bg-opacity-80 shadow overflow-hidden'>
        
        <div className='flex-shrink-0 w-72 truncate text-gray-700 text-left'>
          <div className='transition duration-300 ease-in-out inline-block bg-gray-800 px-2 py-1 rounded-md group-hover:bg-gray-900'>
            <span
              className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400 bg-clip-text"
              style={topUsersStyle}
            >
              {rank}
            </span>
          </div>
          <img className='w-16 rounded-full inline-block mx-4 whitespace-nowrap overflow-hidden' src={avatar} alt={`${username}'s Avatar`} style={{textIndent: '100%'}}></img>
          <span className="transition duration-300 ease-in-out text-gray-400 group-hover:text-gray-400">
            <span className="transition duration-300 ease-in-out text-gray-200 group-hover:text-white">
                {username}
            </span>
            <span>#{("0000" + discriminator).slice(-4)}</span>
          </span>
        </div>
        
        <div className='flex-grow p-4 w-full md:w-auto overflow-hidden'>
          <div className='transition duration-1000 ease-in-out text-white text-left opacity-0 group-hover:opacity-100 overflow-hidden'>
            {Math.round(((level * level * 100) - xp) / 46)} messages to level {level + 1}
          </div>
          {/*
          <div className='transition duration-300 ease-in-out mt-1 mb-1 w-full h-1 bg-gray-700 group-hover:bg-gray-500 rounded overflow-hidden'>
           <motion.div animate={controls} className='transition duration-1000 ease-in-out rounded h-full bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-300 opacity-75 hover:opacity-100 overflow-hidden' style={{width: '0%'}}></motion.div> 
            
          </div>
          */}
          <Progress done={`${percent}`} />
        </div>
        
        <div className='text-white pl-4 h-20 flex w-full md:w-auto items-center justify-between hover:'>
          <div>
            Level
            <br />
            <span className="text-2xl font-medium">
                {level}
            </span>
          </div>
        </div>
      </motion.li>
    )
}

//{xp} / {level * level * 100} XP