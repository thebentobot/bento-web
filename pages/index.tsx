import { Popover } from '@headlessui/react'
import { CogIcon, ChatIcon, FireIcon, UsersIcon, ArrowSmUpIcon } from '@heroicons/react/outline'
import { GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { getData as userDataFetch } from './api/stats/users'
import { getData as serverDataFetch } from './api/stats/servers'
import { motion, Variants, useReducedMotion } from "framer-motion"
import { NextSeo } from 'next-seo'
import useSWR, { SWRConfig } from 'swr'
import fetcher from "../util/fetch";

const features = [
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
];

export interface Data {
  usersCount: number,
  serversCount: number
}

export interface actualData {
  count: number
}
/*
export const getServerSideProps: GetServerSideProps = async () => {
  const resUsers = await userDataFetch()
  const resServers = await serverDataFetch()

  return {
    props: {
      usersCount: resUsers.count, serversCount: resServers.count
    },
  }
}
*/

export const getStaticProps: GetStaticProps = async () => {
  const resUsers = await userDataFetch()
  const resServers = await serverDataFetch()

  return {
    props: {
      fallback: {
        'api/stats/servers': resServers, '/api/stats/users': resUsers
      }
    }
    //, revalidate: 60*10
    // 60*60*6 = 6 hours
     // revalidate isn't supported by netlify yet
    // https://github.com/netlify/netlify-plugin-nextjs/issues/151
  }
}

export function Stats () {
  const { data: serverData, error: serverError } = useSWR<actualData>('/api/stats/servers', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const { data: userData, error: userError } = useSWR<actualData>('/api/stats/users', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const shouldReduceMotion = useReducedMotion()

  if (serverError) {

const animation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
show: {
  opacity: 1,
  transition: {
    duration: 0.8,
  }
}} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}

const bottomAnimation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}
  return (
    <div>
      <Head>
        <title>Bento 🍱</title>
      </Head>
      <NextSeo 
				description={`Bento 🍱 - A Discord bot with server moderation tools and various entertaining commands.`}
				openGraph={{
					title: `Bento 🍱`
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
            `Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most`
					}
				]} />
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
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="-mr-2 flex items-center md:hidden">
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    </div>
                  </nav>
                </div>

                
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div className="sm:text-center lg:text-left">
              <motion.h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl" initial='hidden' animate='show' variants={animation}>
                <span className="block xl:inline">The Discord Bot</span>{' '}
                <span className="block text-yellow-300 xl:inline">Bento</span>
              </motion.h1>
              <motion.p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Discord bot with server moderation tools and various entertaining commands.
              </motion.p>
              <motion.p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Bento Box 🍱 is ready for {Math.floor(85000 / 100) / 10.0 + "k"} Users on {105 - 2} Servers
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                  <motion.a
                    href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=261926943991&scope=bot%20applications.commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        initial='hidden' animate='show' variants={animation}
                  >
                    Add Bento to your server
                  </motion.a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 shadow-lg">
                <motion.a
                  href="/commands"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      initial='hidden' animate='show' variants={animation}
                >
                  View Commands
                </motion.a>
              </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
          width={375}
          height={375}
          alt=""
          initial='hidden' animate='show' variants={animation}
        />
      </div>
    </div>
    <div className="py-12 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={bottomAnimation}>
        <motion.div className="lg:text-center" whileHover={{scale: 1.05}}>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
            The bot you did not know you needed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most 
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative bg-gray-800 px-6 py-6 rounded shadow-lg" whileHover={{scale: 1.05}} initial='hidden' animate='show' variants={animation}>
                <dt>
                  <motion.div whileHover={{rotate: 360, transition: {type: 'spring', duration: 1.5, bounce: 0.25} }} className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
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
                  <motion.a
                    href="/commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    A list of All Commands
                  </motion.a>
                </div>
              </div>
        </div>
    </motion.div>
      </div>
    </div>
  );
  } else if (userError) {

const animation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
show: {
  opacity: 1,
  transition: {
    duration: 0.8,
  }
}} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}

const bottomAnimation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}
  return (
    <div>
      <Head>
        <title>Bento 🍱</title>
      </Head>
      <NextSeo 
				description={`Bento 🍱 - A Discord bot with server moderation tools and various entertaining commands.`}
				openGraph={{
					title: `Bento 🍱`
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
            `Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most`
					}
				]} />
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
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="-mr-2 flex items-center md:hidden">
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    </div>
                  </nav>
                </div>

                
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div className="sm:text-center lg:text-left">
              <motion.h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl" initial='hidden' animate='show' variants={animation}>
                <span className="block xl:inline">The Discord Bot</span>{' '}
                <span className="block text-yellow-300 xl:inline">Bento</span>
              </motion.h1>
              <motion.p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Discord bot with server moderation tools and various entertaining commands.
              </motion.p>
              <motion.p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Bento Box 🍱 is ready for {Math.floor(85000 / 100) / 10.0 + "k"} Users on {105 - 2} Servers
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                  <motion.a
                    href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=261926943991&scope=bot%20applications.commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        initial='hidden' animate='show' variants={animation}
                  >
                    Add Bento to your server
                  </motion.a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 shadow-lg">
                <motion.a
                  href="/commands"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      initial='hidden' animate='show' variants={animation}
                >
                  View Commands
                </motion.a>
              </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
          width={375}
          height={375}
          alt=""
          initial='hidden' animate='show' variants={animation}
        />
      </div>
    </div>
    <div className="py-12 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={bottomAnimation}>
        <motion.div className="lg:text-center" whileHover={{scale: 1.05}}>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
            The bot you did not know you needed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most 
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative bg-gray-800 px-6 py-6 rounded shadow-lg" whileHover={{scale: 1.05}} initial='hidden' animate='show' variants={animation}>
                <dt>
                  <motion.div whileHover={{rotate: 360, transition: {type: 'spring', duration: 1.5, bounce: 0.25} }} className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
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
                  <motion.a
                    href="/commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    A list of All Commands
                  </motion.a>
                </div>
              </div>
        </div>
    </motion.div>
      </div>
    </div>
  );
  } else {

const animation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
show: {
  opacity: 1,
  transition: {
    duration: 0.8,
  }
}} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}

const bottomAnimation: Variants = shouldReduceMotion ? {
  hidden: {
  opacity: 0,
},
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
} : {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}
  return (
    <div>
      <Head>
        <title>Bento 🍱</title>
      </Head>
      <NextSeo 
				description={`Bento 🍱 - A Discord bot with server moderation tools and various entertaining commands.`}
				openGraph={{
					title: `Bento 🍱`
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
            `Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most`
					}
				]} />
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
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="-mr-2 flex items-center md:hidden">
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    </div>
                  </nav>
                </div>

                
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div className="sm:text-center lg:text-left">
              <motion.h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl" initial='hidden' animate='show' variants={animation}>
                <span className="block xl:inline">The Discord Bot</span>{' '}
                <span className="block text-yellow-300 xl:inline">Bento</span>
              </motion.h1>
              <motion.p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Discord bot with server moderation tools and various entertaining commands.
              </motion.p>
              {(userData && serverData) ? <motion.p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0" initial='hidden' animate='show' variants={animation}>
              A Bento Box 🍱 is ready for {Math.floor(userData.count / 100) / 10.0 + "k"} Users on {serverData.count - 2} Servers
              </motion.p> 
              : 
              ''
              }
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                  <motion.a
                    href="https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=261926943991&scope=bot%20applications.commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        initial='hidden' animate='show' variants={animation}
                  >
                    Add Bento to your server
                  </motion.a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 shadow-lg">
                <motion.a
                  href="/commands"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                  whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                      initial='hidden' animate='show' variants={animation}
                >
                  View Commands
                </motion.a>
              </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <motion.img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
          width={375}
          height={375}
          alt=""
          initial='hidden' animate='show' variants={animation}
        />
      </div>
    </div>
    <div className="py-12 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={bottomAnimation}>
        <motion.div className="lg:text-center" whileHover={{scale: 1.05}}>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
            The bot you did not know you needed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto sm:text-center sm:max-w-xl mx-auto text-center">
            Bento 🍱 is a quality and well supported Discord Bot that constantly improves and always delivers when you need it the most 
          </p>
        </motion.div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <motion.div key={feature.name} className="relative bg-gray-800 px-6 py-6 rounded shadow-lg" whileHover={{scale: 1.05}} initial='hidden' animate='show' variants={animation}>
                <dt>
                  <motion.div whileHover={{rotate: 360, transition: {type: 'spring', duration: 1.5, bounce: 0.25} }} className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white">
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
                  <motion.a
                    href="/commands"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black md:py-4 md:text-lg md:px-10"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    A list of All Commands
                  </motion.a>
                </div>
              </div>
        </div>
    </motion.div>
      </div>
    </div>
  );
  }
}

export default function Home({ fallback }: any) {
  return (
    <SWRConfig value={{fallback}} >
      <Stats />
    </SWRConfig>
  )
}