import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

export const alonzoAvatar = 'https://cdn.discordapp.com/avatars/370695349167325196/28495cfc3e5e3c405db7a98d66f81c1c.png?size=1024'
export const tzuwyAvatar = 'https://cdn.discordapp.com/avatars/150443906511667200/daf485b105036c46aba8c283af0358db.png?size=1024'
export const enterAvatar = 'https://cdn.discordapp.com/avatars/188980576483540992/5d5f3b2e0579a93258664214c812f809.png?size=1024'
export const fijiAvatar = 'https://cdn.discordapp.com/avatars/229341113503318018/9fe7c729963f59924a946b20d11b4c52.png?size=1024'
export const lewisAvatar = 'https://cdn.discordapp.com/avatars/166142440233893888/a985e46ae81da885ca44310f50d21014.png?size=1024'
export const adamAvatar = 'https://cdn.discordapp.com/avatars/223908083825377281/eb61ddb3d1ab00a0b88ffcda55b42b17.png?size=1024'
export const bannerAvatar = 'https://cdn.discordapp.com/avatars/232584569289703424/b1b8f416be5ef1c9677afc11f56d4450.png?size=1024'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
		window.$discordMessage = {
			profiles: {
				bentoBot: {
					author: 'Bento',
					avatar: `https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024`,
					roleColor: '#f9d61b',
          bot: true,
          verified: true
				},
        banner: {
          author: 'Banner',
          avatar: bannerAvatar,
          roleColor: '#ff00fa'
        },
        adam: {
          author: 'Adam',
          avatar: adamAvatar,
          roleColor: '#00B2FF'
        },
        lewis: {
          author: 'Lewis',
          avatar: lewisAvatar,
          roleColor: '#00B2FF'
        },
        fiji: {
          author: 'Fiji Spring Water',
          avatar: fijiAvatar,
          roleColor: '#00B2FF'
        },
        enter: {
          author: 'Enter',
          avatar: enterAvatar,
          roleColor: '#03f611'
        },
        tzuwy: {
          author: 'tzuwy',
          avatar: tzuwyAvatar,
          roleColor: '#f0dacb'
        },
        alonzo: {
          author: 'alonzo',
          avatar: alonzoAvatar,
          roleColor: '#99ff99'
        },
			}
		}
	}, [])

  const [isVisible, setIsVisible] = useState(false)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 250 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 250) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen">
      <Head>
      <link rel="icon" href="/favicon.ico" />
                        <meta content="Bento 🍱" property="og:title" />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://www.bentobot.xyz/" />
                        <meta
                            content="A Discord bot with server moderation tools and various entertaining commands."
                            property="og:description"
                        />
                        <meta property="og:image" content="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024" />
                        <meta property="og:image:secure_url" content="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024" />
                        <meta property="og:image:type" content="image/png" />
                        <meta property="og:image:width" content="375" />
                        <meta property="og:image:height" content="375" />
                        <meta name="twitter:card" content="summary_large_image"/>

                        <link
                            rel="apple-touch-icon"
                            sizes="180x180"
                            href="../public/apple-touch-icon-180x180.png"
                        />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="32x32"
                            href="../public/favicon-32x32.png"
                        />
                        <link rel="shortcut icon" href="/icons/favicon.ico" />
                        <link rel="icon" type="image/png" sizes="192x192" href="../public/android-chrome-192x192.png" />
                        <link
                            rel="icon"
                            type="image/png"
                            sizes="16x16"
                            href="../public/favicon-16x16.png"
                        />
                        <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" />
                        <link
                            rel="mask-icon"
                            href="../public/safari-pinned-tab.svg"
                            color="#ffd903"
                        />
                        <meta
                            name="msapplication-TileColor"
                            content="#ffd903"
                        />
                        <meta name="theme-color" content="#ffd903" />
                        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                        <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=2.0,Transition=2)" />
                        <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=3.0,Transition=12)" />
      </Head>
      <DefaultSeo {...SEO}/>
      <div className="fixed bottom-3 bg-yellow-300 right-3  cursor-pointer z-50">
      {isVisible && (
        <motion.div
          onClick={scrollToTop}
          className="fixed p-2 rounded-lg bg-yellow-300 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer"
          whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
</svg>
        </motion.div>
      )}
    </div>
    <html lang="en"/>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
export default MyApp
