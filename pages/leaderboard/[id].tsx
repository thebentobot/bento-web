import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import LeaderboardParent from "../../components/leaderboard/leaderboardParent"
import { getData as getUsersData} from "../api/leaderboard"
import { getData as getGuildData } from "../api/guild"
import { motion, Variants } from "framer-motion"
import { NextSeo } from "next-seo"
import { getData } from "../api/guilds"
import { useRouter } from "next/router"
import useSWR, { SWRConfig } from 'swr'
import fetcher from "../../util/fetch"

const animation: Variants = {
  hidden: { opacity: 0 },
  show: {
      opacity: 1,
      transition: {
        duration: 2,
      }
  },
}

interface LeaderboardRankingsInterface {
  rank: string,
  level: number,
  xp: number,
  userID: string,
  avatarURL: string,
  username: string,
  discriminator: string
}

interface guildInterface {
  guildID: bigint,
  guildName: string,
  leaderboard: boolean,
  icon: string
}

interface userRankingsInterface {
  users: LeaderboardRankingsInterface[]
  guild: guildInterface
}

/*
export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const guildID = query.id
  const resUsers = await getUsersData(guildID as string)
  const resServer = await getGuildData(guildID as string)

  return {
    props: {
      users: resUsers, guild: resServer
    },
  }
}
*/

export const getStaticPaths: GetStaticPaths<{id: string}> = async () => {
  const guilds = await getData()

  const paths = guilds.map((guild) => ({
    params: { id: `${guild.guildID}`}
  }))
  // when the servers scale, it needs to only fetch the top x amount of servers in build time, rest will be made by ISR
  // https://vercel.com/docs/next.js/incremental-static-regeneration
  // https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
  //console.log(paths)

  return { paths, fallback: 'blocking'}
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  //const { guild } = params.id
  //console.log(guild)
  const resUsers = await getUsersData(context.params.id as string)
  const resServer = await getGuildData(context.params.id as string)

  return {
    props: {
      fallback: {
        'api/leaderboard/': resUsers, 'api/guild/': resServer
      }
    }
    //, revalidate: 60*10
    // 60*60*6 = 6 hours
     // revalidate isn't supported by netlify yet
    // https://github.com/netlify/netlify-plugin-nextjs/issues/151
  }
}

export function Users () {
  const router = useRouter()
  const { id } = router.query
  const { data: userData, error: userError } = useSWR<LeaderboardRankingsInterface[]>(id ? `/api/leaderboard/?id=${id}` : null, id ? fetcher : null, id ? {refreshInterval: 30000, revalidateOnFocus: true} : {})
  const { data: guildData, error: guildError } = useSWR<guildInterface>(id ? `/api/guild/?id=${id}` : null, id ? fetcher : null, id ? {refreshInterval: 30000, revalidateOnFocus: true} : {})
  if (userError || guildError) {
    return (
      <div><p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
      Error
    </p></div>
    )
  } else {
    return (
      <div>
        <Head>
        <title>Bento 🍱 | Leaderboard for {guildData?.guildName}</title>
      </Head>
      <NextSeo 
				description={`Check out the Bento 🍱 Leaderboard for ${guildData?.guildName}`}
				openGraph={{
					title: `Bento 🍱 | Leaderboard for ${guildData?.guildName}`
				}}
				additionalMetaTags={[
					{
						name: 'summary',
						content:
            `Check out the Bento 🍱 Leaderboard for ${guildData?.guildName}`
					}
				]} />
      <div className="py-6 lg:py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center text-center overflow-hidden">
            <motion.p initial="hidden"
        animate="show"
        variants={animation} className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Leaderboard for {guildData?.guildName}
            </motion.p>
            <motion.div className='bg-gray-900 mx-auto my-auto p-2 mt-8 w-64 rounded shadow-lg bg-opacity-50' initial="hidden"
        animate="show"
        variants={animation}>
            {userData ? <motion.img width={256} height={256} initial="hidden"
        animate="show"
        variants={animation} className='mx-auto shadow-lg' src={guildData?.icon}></motion.img>
      : ''}
            </motion.div>
            <br></br>
            {userData ? <div className='max-w-screen-2xl mx-auto px-3'>
              <LeaderboardParent items={userData}/>
            </div> : <div>
  <motion.div initial="hidden"
        animate="show"
        variants={animation} style={{borderTopColor: 'transparent'}}
      className="w-16 h-16 border-4 border-yellow-400 border-solid rounded-full animate-spin mx-auto"></motion.div>
</div>}
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}

export default function Leaderboard({fallback}: any) {
    return (
      <SWRConfig value={{fallback}}>
        <Users />
      </SWRConfig>
    )
  }