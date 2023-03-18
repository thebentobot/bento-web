import LeaderboardChild from "./leaderboardChild";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface LeaderboardParentRankingsInterface {
	rank: string;
	level: number;
	xp: number;
	userID: string;
	avatarURL: string;
	username: string;
	discriminator: string;
}

interface userDataInterface {
	items: LeaderboardParentRankingsInterface[];
}

export default function LeaderboardParent({ items }: userDataInterface) {
	const shouldReduceMotion = useReducedMotion();

	const animation: Variants = shouldReduceMotion
		? {
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						duration: 0.5,
					},
				},
		  }
		: {
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.2,
						delayChildren: 0.2,
					},
				},
		  };

	const animationItem: Variants = shouldReduceMotion
		? {
				hidden: {
					opacity: 0,
				},
				show: {
					opacity: 1,
					transition: {
						duration: 0.5,
					},
				},
		  }
		: {
				hidden: {
					opacity: 0,
					y: -50,
				},
				show: {
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.5,
					},
				},
		  };
	return (
		<motion.ul className="relative" initial="hidden" animate="show" variants={animation}>
			{items.map((DiscordUser, i) => (
				<motion.div key={i} variants={animationItem} className="shadow-lg">
					<LeaderboardChild
						key={DiscordUser.userID}
						rank={DiscordUser.rank}
						level={DiscordUser.level}
						xp={DiscordUser.xp}
						userID={DiscordUser.userID}
						avatarURL={DiscordUser.avatarURL}
						username={DiscordUser.username}
						discriminator={DiscordUser.discriminator}
					/>
				</motion.div>
			))}
		</motion.ul>
	);
}
