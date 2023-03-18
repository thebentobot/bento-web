import { useRouter } from 'next/router'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useReducedMotion, Variants } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
};

export default function Example() {
  const shouldReduceMotion = useReducedMotion()

  const animation: Variants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
          duration: 0.3,
        }
    },
  } : {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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
        duration: 0.3,
      }
    }
  } : {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      }
    }
  }

    const { asPath } = useRouter()
    const navigation = [
        { name: 'About', href: '/about', current: asPath === '/about' ? true : false },
        { name: 'Support', href: '/support', current: asPath === '/support' ? true : false },
        { name: 'Setup', href: '/setup', current: asPath === '/setup' ? true : false },
        { name: 'Commands', href: '/commands', current: asPath === '/commands' ? true : false },
        { name: 'Leaderboard', href: '/leaderboard', current: asPath === '/leaderboard' ? true : false },
      ]
  return (
    <Disclosure as="nav" className="bg-gray-900 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                </div>
                <Link href="/" passHref className='inline'>
                    <div className='hover:bg-yellow-300 rounded-md'>
                      <Image src="/bento_trans.png" alt="Bento logo" width={25} height={25} />
                    </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  <Link href="/bento-2.0" key="bento2.0" className='inline whitespace-nowrap'>
                    <motion.span
                          className='bg-yellow-300 text-black px-3 py-2 rounded-md text-sm font-medium'
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.9 }}
                          variants={animationItem}
                    >
                      Bento 2.0
                    </motion.span>
                  </Link>
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <motion.span
                        className={classNames(
                          item.current ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:bg-yellow-300 hover:text-black',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.9 }}
                        variants={animationItem}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <motion.div className="px-2 pt-2 pb-3 space-y-1" initial='hidden' animate='show' variants={animation}>
              <Link href="/bento-2.0">
                <motion.span
                  key="bento2.0"
                  className='bg-yellow-300 text-black block px-3 py-2 rounded-md text-base font-medium text-center'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  variants={animationItem}
                >
                  Bento 2.0
                </motion.span>
              </Link>
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <motion.span
                    className={classNames(
                      item.current ? 'bg-yellow-300 text-black' : 'text-gray-300 hover:bg-yellow-300 hover:text-black',
                      'block px-3 py-2 rounded-md text-base font-medium text-center'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                    whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.9 }}
                          variants={animationItem}
                  >
                  {item.name}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}