import { CogIcon, ChatBubbleOvalLeftEllipsisIcon, FireIcon, UsersIcon } from "@heroicons/react/24/outline"
import { motion, useReducedMotion, Variants } from "framer-motion"

const features: {name: string, description: string, icon: typeof CogIcon | typeof ChatBubbleOvalLeftEllipsisIcon | typeof FireIcon | typeof UsersIcon }[] = [
  {
    name: 'Slash Commands, Select Menus, Buttons',
    description:
      'There is huge possibilities in the new Discord Bot features. Now it is way easier for users to use and remember various arguments + using them correctly, more intuition with the Select Menus and Buttons. A huge step for user experience.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Amazing New Features',
    description:
      'The help menu is a select menu now, huge buttons for the gfycat feature, the possibility of having select choices for certain commands. In the foreseeable future, the introduction of whoknows lastfm commands and favourite/bias game will be a huge step into the direction of becoming a bot for media and entertainment for its users.',
    icon: UsersIcon,
  },
  {
    name: 'Message commands will ASAP be supported again',
    description:
      'Most of the current supported commands are message command supported, but Discord has not approved Bentos application for access to message content yet. So if you prefer message commands, it will soon be possible again!',
    icon: FireIcon,
  },
  {
    name: 'Some commands have not been migrated over YET',
    description:
      'Features such as leaderboards, e.g. toptracks for lastfm, the possibility to sketch your own profile, notifications and reminders. All user oriented, media and entertainment commands from the last version of Bento 🍱 will be migrated over. Also a huge overhaul with the settings commands, utilising select menus and modals.',
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
            Bento 2.0 🍱 is a huge improvement over the previous iteration of Bento 🍱 and a foundational change in terms of visions for the future of the project.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            Improving overall infrastructure and reliability, implementing new Discord API features such as Slash Commands, Select Menus and Buttons.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            The focus for the future will be on <strong>media and entertainment commands</strong>, which means that moderation commands will be deprecated.
          </p>
        </motion.div>
        <p className="mt-2 text-9xl leading-8 font-extrabold tracking-tight text-yellow-300 sm:text-4xl text-center">
            New features and disclaimers
        </p>
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
    </motion.div>
      </div>
    )
}

/*
*/