import Head from "next/head"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function About() {
  const shouldReduceMotion = useReducedMotion()

const animation: Variants = shouldReduceMotion ? {
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
        <title>About Bento 🍱</title>
      </Head>
      <NextSeo 
				description="About Bento 🍱 - The best Discord bot available, and how it was created"
				openGraph={{
					title: "About Bento 🍱"
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
							"About Bento 🍱 - The best Discord bot available, and how it was created"
					}
				]} />
      <div className="py-6 lg:py-12 bg-gray-800">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation}>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
              About Bento 🍱
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
              Bento 🍱 is a Discord bot that provides various media and entertainment commands, with a focus on quality delivery.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
              Bento 🍱 was started as a project to learn JavaScript and programming in general, and is a project of continuous learning and improvement.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
              <strong>The goal</strong> for Bento 🍱 is to create <strong>joy</strong>. Joy for the users by always being reliable and deliver commands as expected. Make their chatting experience more fun and easier on Discord.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
              The goal for Bento 🍱 will <strong>never</strong> be to earn money. <br /> Bento 🍱 is treated as a <strong>non-profit project</strong>, with sponsorship options on {" "}
                    <a
                        href="https://www.patreon.com/bentobot"
                        target="_blank"
                        rel="noreferrer"
                        className='text-patreon hover:underline'
                    >
                        Patreon
                    </a>{" "} and <a
                        href="https://ko-fi.com/bentobot"
                        target="_blank"
                        rel="noreferrer"
                        className='text-kofi hover:underline'
                    >
                        Ko-fi
                    </a>{" "}, where the raised funding is spend solely on hosting and improving Bento 🍱. If you are interested in reading about supporting, then <a
                        
                        
                        className='text-yellow-300 hover:underline'
                    >
                        <Link href='/support'>Click here!</Link>
                    </a>{" "}
            </p>
          </div>
        </motion.div>
      </div>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="lg:text-center" initial='hidden' animate='show' variants={animation}>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
              What powers Bento 🍱?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Bento 🍱 is written in {" "}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-typescript hover:underline'
                    >
                        TypeScript
                    </a>{" "} and uses the {" "}
                    <a
                        href="https://discord.js.org/#/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-discordBlue hover:underline'
                    >
                        Discord.js
                    </a>{" "} Node.js module that interacts with the {" "}
                    <a
                        href="https://discord.com/developers/docs/reference"
                        target="_blank"
                        rel="noreferrer"
                        className='text-discordBlue hover:underline'
                    >
                        Discord API
                    </a>.{" "} Bento 🍱 uses a {" "}
                    <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-postgresql hover:underline'
                    >
                        PostgreSQL
                    </a>{" "} database with {" "}
                    <a
                        href="https://www.prisma.io/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-white hover:underline'
                    >
                        Prisma
                    </a>.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            The Bento 🍱 website is powered by {" "}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:underline"
                    >
                        Next.js
                    </a> and {" "}
                    <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                        className='text-tailwindcss hover:underline'
                    >
                        Tailwind CSS
                    </a>.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            All the source code are open-source and available on {" "}
                    <a
                        href="https://github.com/thebentobot"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:underline"
                    >
                        GitHub
                    </a>.{" "}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            The development of Bento 🍱 is {" "}
                    <a
                        className='font-bold'
                    >
                        most importantly
                    </a>{" "} supported by a community of supporters and good friends on the {" "}
                    <a
                        href="https://discord.gg/dd68WwP"
                        target="_blank"
                        rel="noreferrer"
                        className="text-yellow-400 hover:underline"
                    >
                        Bento 🍱 Support Server
                    </a>{" "} where ideas, discussion, feedback and bug reporting are happening, besides just chatting. Everyone is welcome to join!
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Logo drawn by {" "}
                    <a
                        href="https://twitter.com/dannalanart"
                        target="_blank"
                        rel="noreferrer"
                        className=" text-blue-400 hover:underline"
                    >
                        Dan
                    </a>.{" "}
            </p>
          </motion.div>
        </div>
      </div>
      </div>
      
    )
  }