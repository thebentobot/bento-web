import Head from "next/head";
import { motion, useReducedMotion, Variants } from "framer-motion"
import { NextSeo } from 'next-seo';
import { GetStaticProps } from "next";
import { getData as getPatreonSupportersData } from "./api/patreon/supporter";
import { getData as getPatreonFollowersData } from "./api/patreon/follower";
import { getData as getPatreonEnthusiastsData } from "./api/patreon/enthusiast";
import { getData as getPatreonDisciplesData } from "./api/patreon/disciple";
import { getData as getPatreonSponsorsData } from "./api/patreon/sponsor";
import PatreonParent from "../components/patreon/patreonParent";
import useSWR, { SWRConfig } from 'swr'
import fetcher from "../util/fetch";

export interface patreon {
  id: number,
  userID: bigint,
  name: string,
  avatar?: string,
  supporter: boolean,
  follower: boolean,
  enthusiast: boolean,
  disciple: boolean,
  sponsor: boolean,
  rank: number
}

export interface patreonData {
  supporters: patreon[],
  followers: patreon[],
  enthusiasts: patreon[],
  disciples: patreon[],
  sponsors: patreon[]
}

export const getStaticProps: GetStaticProps = async () => {
  const supporters = await getPatreonSupportersData()
  const followers = await getPatreonFollowersData()
  const enthusiasts = await getPatreonEnthusiastsData()
  const disciples = await getPatreonDisciplesData()
  const sponsors = await getPatreonSponsorsData()

  return {
    props: {
      fallback: {
        '/api/patreon/supporter': supporters,
        '/api/patreon/follower': followers,
        '/api/patreon/enthusiast': enthusiasts,
        '/api/patreon/disciple': disciples,
        '/api/patreon/sponsor': sponsors
      }
    }
    //, revalidate: 60*10
    // 60*60*6 = 6 hours
     // revalidate isn't supported by netlify yet
    // https://github.com/netlify/netlify-plugin-nextjs/issues/151
  }
}

export function Patreon() {
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

  const { data: supporterData, error: supporterError } = useSWR<patreon[]>('/api/patreon/supporter', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const { data: followerData, error: followerError } = useSWR<patreon[]>('/api/patreon/follower', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const { data: enthusiastData, error: enthusiastError } = useSWR<patreon[]>('/api/patreon/enthusiast', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const { data: discipleData, error: discipleError } = useSWR<patreon[]>('/api/patreon/disciple', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})
  const { data: sponsorData, error: sponsorError } = useSWR<patreon[]>('/api/patreon/sponsor', fetcher, {refreshInterval: 30000, revalidateOnFocus: true})

  let rankArray = [];
  if (!!sponsorData?.length !== false) rankArray.push(sponsorData)
  if (!!discipleData?.length !== false) rankArray.push(discipleData)
  if (!!enthusiastData?.length !== false) rankArray.push(enthusiastData)
  if (!!followerData?.length !== false) rankArray.push(followerData)
  if (!!supporterData?.length !== false) rankArray.push(supporterData)

  for (let index = 0; index < rankArray.length; index++) {
    rankArray[index]?.forEach(user => user.rank = index + 1)  
  }

  if (supporterError || followerError || enthusiastError || discipleError || sponsorError) {
    return (
      <div>
        <Head>
        <title>Support Bento 🍱</title>
      </Head>
      <NextSeo 
				description="How to support Bento 🍱 - The best free Discord bot available"
				openGraph={{
					title: "Support Bento 🍱"
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
                        "How to support Bento 🍱 - The best free Discord bot available"
					}
				]} />
      <div className="py-6 lg:py-12 bg-gray-800">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation}>
        <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center mx-auto">
              Who supports Bento 🍱
        </p>
        
          <div className='max-w-screen-2xl mx-auto px-3 pt-2'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Database error 😳
          </p>
          </div>
      
        </div>
      </motion.div>
      </div>
      <div className="py-12 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation}>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
              What do I gain by supporting Bento 🍱
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
                By supporting Bento 🍱, you are an important part of ensuring that the performance of Bento 🍱 is always stellar, the experience is top quality and a joy for thousands of Discord users, and available for free for everyone. <strong>Everyone deserves free essential Discord Server features</strong>.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
                Besides the goodwill of helping your community by your appreciated generosity, you will receive <strong>benefits</strong> when using Bento 🍱. <br />
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Do you want to be <strong>deeply involved</strong> in the future of Bento 🍱?
            <br />
            Do you want <strong>help and support</strong> with Bento 🍱 <strong>always at your disposal</strong>?
                <br /> Do you want access to <strong>new Bento 🍱 features</strong> before anyone else?
                <br /> Or do you simply want <strong>more Bento 🍱 and XP per message</strong>?           
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Read more about the benefits of supporting on            
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://www.patreon.com/bentobot"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-patreon hover:bg-patreon hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Patreon
                  </motion.a>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Want to rather give a small tip and receive a Bento 🍱 for each tip?           
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://ko-fi.com/bentobot"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-kofi hover:bg-kofi hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Ko-fi ❤️☕
                  </motion.a>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            <strong>Want to support for free and receive 5 Bento 🍱? </strong>
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://top.gg/bot/787041583580184609/vote"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-black hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Vote on top.gg
                  </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      
    );
  } else {
    return (
      <div>
        <Head>
        <title>Support Bento 🍱</title>
      </Head>
      <NextSeo 
				description="How to support Bento 🍱 - The best free Discord bot available"
				openGraph={{
					title: "Support Bento 🍱"
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
                        "How to support Bento 🍱 - The best free Discord bot available"
					}
				]} />
      <div className="py-6 lg:py-12 bg-gray-800">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation}>
        <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center mx-auto">
              Who supports Bento 🍱
        </p>
        {sponsorData?.length === 0 && discipleData?.length === 0 && enthusiastData?.length === 0 && followerData?.length === 0 && supporterData?.length === 0 &&
          <div className='max-w-screen-2xl mx-auto px-3 pt-2'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Other than the awesome users who supports by using Bento 🍱 <br /> no <strong>Patrons</strong> on {" "}
                    <a
                        href="https://www.patreon.com/bentobot"
                        target="_blank"
                        rel="noreferrer"
                        className='text-patreon hover:underline'
                    >
                        Patreon
                    </a>{" "} at the moment.
          </p>
          </div>
        }
        {sponsorData ? (sponsorData?.length !== 0 ? <div className='max-w-screen-2xl mx-auto px-3 pt-2'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            {sponsorData?.length > 1 ? `Bento 🍱 Sponsors` : `Bento 🍱 Sponsor`}
          </p>
            <PatreonParent items={sponsorData}/>
        </div> : '') : 
        <div>
        <motion.div initial="hidden"
              animate="show"
              variants={animation} style={{borderTopColor: 'transparent'}}
            className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
      </div>
        }
        {discipleData ? (discipleData?.length !==0 ? <div className='max-w-screen-2xl mx-auto px-3'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            {discipleData?.length > 1 ? `Bento 🍱 Disciples` : `Bento 🍱 Disciple`}
          </p>
            <PatreonParent items={discipleData}/>
        </div> : '') :  
        <div>
        <motion.div initial="hidden"
              animate="show"
              variants={animation} style={{borderTopColor: 'transparent'}}
            className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
      </div>
        }
        {enthusiastData ? (enthusiastData?.length !== 0 ? <div className='max-w-screen-2xl mx-auto px-3'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            {enthusiastData?.length > 1 ? `Bento 🍱 Enthusiasts` : `Bento 🍱 Enthusiast`}
          </p>
            <PatreonParent items={enthusiastData}/>
        </div> : '')
        :
        <div>
        <motion.div initial="hidden"
              animate="show"
              variants={animation} style={{borderTopColor: 'transparent'}}
            className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
      </div>
        }
        {followerData ? (followerData?.length !== 0 ? <div className='max-w-screen-2xl mx-auto px-3'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            {followerData?.length > 1 ? `Bento 🍱 Followers` : `Bento 🍱 Follower`}
          </p>
            <PatreonParent items={followerData}/>
        </div> : '')
        :
        <div>
        <motion.div initial="hidden"
              animate="show"
              variants={animation} style={{borderTopColor: 'transparent'}}
            className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
      </div>
        }
        {supporterData ? (supporterData?.length !== 0 ? <div className='max-w-screen-2xl mx-auto px-3'>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            {supporterData.length > 1 ? `Bento 🍱 Supporters` : `Bento 🍱 Supporter`}
          </p>
            <PatreonParent items={supporterData}/>
        </div> : '')
        :
        <div>
        <motion.div initial="hidden"
              animate="show"
              variants={animation} style={{borderTopColor: 'transparent'}}
            className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
      </div>
        }
        </div>
      </motion.div>
      </div>
      <div className="py-12 bg-gray-900">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" initial='hidden' animate='show' variants={animation}>
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center">
              What do I gain by supporting Bento 🍱
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
                By supporting Bento 🍱, you are an important part of ensuring that the performance of Bento 🍱 is always stellar, the experience is top quality and a joy for thousands of Discord users, and available for free for everyone. <strong>Everyone deserves free essential Discord Server features</strong>.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
                Besides the goodwill of helping your community by your appreciated generosity, you will receive <strong>benefits</strong> when using Bento 🍱. <br />
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Do you want to be <strong>deeply involved</strong> in the future of Bento 🍱?
            <br />
            Do you want <strong>help and support</strong> with Bento 🍱 <strong>always at your disposal</strong>?
                <br /> Do you want access to <strong>new Bento 🍱 features</strong> before anyone else?
                <br /> Or do you simply want <strong>more Bento 🍱 and XP per message</strong>?           
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Read more about the benefits of supporting on            
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://www.patreon.com/bentobot"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-patreon hover:bg-patreon hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Patreon
                  </motion.a>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            Want to rather give a small tip and receive a Bento 🍱 for each tip?           
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://ko-fi.com/bentobot"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-kofi hover:bg-kofi hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Ko-fi ❤️☕
                  </motion.a>
            </div>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto text-center mx-auto">
            <strong>Want to support for free and receive 5 Bento 🍱? </strong>
            </p>
            <div className="mt-4 rounded-md">
                  <motion.a
                    href="https://top.gg/bot/787041583580184609/vote"
                    className="w-48 lg:w-96 mx-auto flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-black hover:text-white md:py-4 md:text-lg md:px-10 px-4 sm:px-6 lg:px-8"
                    whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                  >
                    Vote on top.gg
                  </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
      
    );
  }
}

export default function Support({fallback}: any) {
  return (
    <SWRConfig value={{fallback}} >
      <Patreon />
    </SWRConfig>
  )
  }