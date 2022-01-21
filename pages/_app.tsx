import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

export const alonzoAvatar = '/alonzo.png'
export const tzuwyAvatar = '/tzuwy.png'
export const enterAvatar = '/enter.png'
export const fijiAvatar = '/fiji.png'
export const lewisAvatar = '/lewis.png'
export const adamAvatar = '/adam.gif'
export const bannerAvatar = '/banner.png'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
		window.$discordMessage = {
			profiles: {
				bentoBot: {
					author: 'Bento',
					avatar: `/bento.png`,
					roleColor: '#f9d61b',
          bot: true,
          verified: true
				},
        banner: {
          author: 'Banner',
          avatar: '/banner.png',
          roleColor: '#ff00fa'
        },
        adam: {
          author: 'Adam',
          avatar: '/adam.gif',
          roleColor: '#00B2FF'
        },
        lewis: {
          author: 'Lewis',
          avatar: '/lewis.png',
          roleColor: '#00B2FF'
        },
        fiji: {
          author: 'Fiji Spring Water',
          avatar: '/fiji.png',
          roleColor: '#00B2FF'
        },
        enter: {
          author: 'Enter',
          avatar: '/enter.png',
          roleColor: '#03f611'
        },
        tzuwy: {
          author: 'tzuwy',
          avatar: '/tzuwy.png',
          roleColor: '#f0dacb'
        },
        alonzo: {
          author: 'alonzo',
          avatar: '/alonzo.png',
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
      <script>
    const theme = localStorage.getItem(`theme``) || `light``;
    document.body.className = theme;
  </script>
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
