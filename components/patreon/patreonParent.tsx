import PatreonAvatar from "./patreonAvatar"
import { motion, useReducedMotion, Variants } from "framer-motion"

interface patreonUserInterface {
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

interface userDataInterface {
    items: patreonUserInterface[] | undefined
}

export default function PatreonParent({items}: userDataInterface) {
    const shouldReduceMotion = useReducedMotion()

    const animation: Variants = shouldReduceMotion ? {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
            }
        },
    } : {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        },
    }
    
    const animationItem: Variants = shouldReduceMotion ? {
        hidden: {
            opacity: 0,
          },
          show: {
            opacity: 1,
            transition: {
              duration: 0.5,
            }
          }
    } : {
        hidden: {
          opacity: 0,
          x: -50,
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.5,
          }
        }
    }
    return (
        <motion.ul className='block flex-wrap mx-auto text-center' initial="hidden"
        animate="show"
        variants={animation}>
            {items?.map((patreonUser, i) => (
                <motion.div key={i} variants={animationItem} className='mx-auto inline-block p-1'>
                <PatreonAvatar 
                key={patreonUser.id} 
                id={patreonUser.id}
                userID={patreonUser.userID}
                name={patreonUser.name}
                avatar={patreonUser.avatar}
                supporter={patreonUser.supporter}
                follower={patreonUser.follower}
                enthusiast={patreonUser.enthusiast}
                disciple={patreonUser.disciple}
                sponsor={patreonUser.sponsor}
                rank={patreonUser.rank}
                />
                </motion.div>
        ))}
        </motion.ul>
    )
}