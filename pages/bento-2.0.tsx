import { CogIcon, ChatIcon, FireIcon, UsersIcon } from "@heroicons/react/outline"
import { motion, useReducedMotion, Variants } from "framer-motion"

const features: {name: string, description: string, icon: typeof CogIcon | typeof ChatIcon | typeof FireIcon | typeof UsersIcon }[] = [
  {
    name: 'Magnificent Moderation Tools',
    description:
      'Case descriptive system for warnings, kicks, mutes and bans, which you can edit on the go. Check cases across servers who has Bento 🍱 and more',
    icon: ChatIcon,
  },
  {
    name: 'Amusing Chat XP System For Your Users',
    description:
      'Users gain XP for every minute they chat and are able to see who has written the most by the server\'s own leaderboard. Every 12th hour, users are able to give a 🍱 to another user. Serverwide leaderboards are available as well',
    icon: UsersIcon,
  },
  {
    name: 'Amazing Extra Features',
    description:
      'Make your personal profile, check the weather or time anywhere in the world, check your horoscope, look up a Tenor GIF, get an Urban Dictionary definition, compare LastFM statistics, set reminders or keyword notifications, and make your own custom tags to remember good memes or memories',
    icon: FireIcon,
  },
  {
    name: 'Accommodating Server Settings',
    description:
      'Do you only care for the moderation tools and think some of the extra features are unnecessary? Bento 🍱 allows you to enable and disable features according to your server and its preferences. Don\'t want a leaderboard for your server? Disable it. Don\'t want GIFs at all? Disable it.',
    icon: CogIcon,
  },
]

export default function BentoUpdate() {
  const shouldReduceMotion = useReducedMotion()


const animation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 1,
},
show: {
  opacity: 1,
  transition: {
    duration: 0,
  }
}} : {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
    }
  }
}

const bottomAnimation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 1,
},
  show: {
    opacity: 1,
    transition: {
      duration: 0,
    }
  }
} : {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
    }
  }
}
    return (
        <div className="py-12 bg-gray-800 border-b border-gray-500">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={bottomAnimation}>
        <motion.div className="lg:text-center" whileHover={{
          scale: 1.05
        }}>
          <p className="mt-2 text-9xl leading-8 font-extrabold tracking-tight text-yellow-300 sm:text-4xl text-center">
            Bento 2.0
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most 
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => <motion.div key={feature.name} className="relative bg-gray-900 px-6 py-6 rounded shadow-lg" whileHover={{
              scale: 1.05
            }} initial='hidden' animate='show' variants={animation}>
                <dt>
                  <motion.div whileHover={{
                  rotate: 360,
                  transition: {
                    type: 'spring',
                    duration: 1.5,
                    bounce: 0.25
                  }
                }} className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
              </motion.div>)}
          </dl>
        </div>
        <br></br>
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
            Check all commands by clicking below!
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:text-center">

            <div className="rounded-md shadow">
                  <motion.a href="/commands" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10" whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }}>
                    A list of All Commands
                  </motion.a>
                </div>
              </div>
        </div>
    </motion.div>
      </div>
    )
}