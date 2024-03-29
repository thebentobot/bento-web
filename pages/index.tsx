import { CogIcon, ChatBubbleOvalLeftEllipsisIcon, FireIcon, UsersIcon } from "@heroicons/react/24/outline";
import { GetStaticProps } from "next";
import { getData as userDataFetch } from "./api/stats/users";
import { getData as serverDataFetch } from "./api/stats/servers";
import { Variants, useReducedMotion } from "framer-motion";
import HomePage from "../components/HomePage";

const features: {
	name: string;
	description: string;
	icon: typeof CogIcon | typeof ChatBubbleOvalLeftEllipsisIcon | typeof FireIcon | typeof UsersIcon;
}[] = [
	/*
  {
    name: 'TODO',
    description:
      'TODO',
    icon: ChatIcon,
  },
  */
	{
		name: "Amusing Chat XP System For Your Users",
		description:
			"Users gain XP for every minute they chat and are able to see who has written the most by the server's own leaderboard. Every 12th hour, users are able to give a 🍱 to another user. Serverwide leaderboards are available as well",
		icon: UsersIcon,
	},
	{
		name: "Amazing Extra Features",
		description:
			"Make your personal profile, check the weather anywhere in the world, check your horoscope, search for stuff on Gfycat, get an Urban Dictionary definition, compare LastFM statistics, set reminders or keyword notifications, and make your own custom tags to remember good memes or memories",
		icon: FireIcon,
	},
	/*
  {
    name: 'Accommodating Server Settings',
    description:
      'Do you only care for the moderation tools and think some of the extra features are unnecessary? Bento 🍱 allows you to enable and disable features according to your server and its preferences. Don\'t want a leaderboard for your server? Disable it. Don\'t want GIFs at all? Disable it.',
    icon: CogIcon,
  },
  */
];

export interface Data {
	usersCount: number;
	serversCount: number;
}

export const getStaticProps: GetStaticProps = async () => {
	const resUsers = await userDataFetch();
	const resServers = await serverDataFetch();

	return {
		props: {
			usersCount: resUsers.count,
			serversCount: resServers.count,
		},
		revalidate: 60 * 10,
		// 60*60*6 = 6 hours
		// revalidate isn't supported by netlify yet
		// https://github.com/netlify/netlify-plugin-nextjs/issues/151
	};
};

export default function Home({ usersCount, serversCount }: Data) {
	const shouldReduceMotion = useReducedMotion();

	const animation: Variants = shouldReduceMotion
		? {
				hidden: {
					opacity: 1,
				},
				show: {
					opacity: 1,
					transition: {
						duration: 0,
					},
				},
		  }
		: {
				hidden: {
					opacity: 1,
				},
				show: {
					opacity: 1,
					transition: {
						duration: 0,
					},
				},
		  };

	const bottomAnimation: Variants = shouldReduceMotion
		? {
				hidden: {
					opacity: 1,
				},
				show: {
					opacity: 1,
					transition: {
						duration: 0,
					},
				},
		  }
		: {
				hidden: {
					opacity: 1,
				},
				show: {
					opacity: 1,
					transition: {
						duration: 0,
					},
				},
		  };
	return (
		<HomePage
			animation={animation}
			usersCount={usersCount}
			serversCount={serversCount}
			bottomAnimation={bottomAnimation}
			features={features}
		/>
	);
}
