import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import ScrollButton from '../components/scrollButton'

export const alonzoAvatar = '/alonzo.webp'
export const tzuwyAvatar = '/tzuwy.webp'
export const enterAvatar = '/enter.webp'
export const fijiAvatar = '/fiji.webp'
export const lewisAvatar = '/lewis.webp'
export const adamAvatar = '/adam.webp'
export const bannerAvatar = '/banner.webp'

function MyApp({ Component, pageProps }: AppProps) {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(()=>{
    setPageLoaded(true)
  },[])
  
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
          avatar: '/banner.webp',
          roleColor: '#ff00fa'
        },
        adam: {
          author: 'Adam',
          avatar: '/adam.webp',
          roleColor: '#00B2FF'
        },
        lewis: {
          author: 'Lewis',
          avatar: '/lewis.webp',
          roleColor: '#00B2FF'
        },
        fiji: {
          author: 'Fiji Spring Water',
          avatar: '/fiji.webp',
          roleColor: '#00B2FF'
        },
        enter: {
          author: 'Enter',
          avatar: '/enter.webp',
          roleColor: '#03f611'
        },
        tzuwy: {
          author: 'tzuwy',
          avatar: '/tzuwy.webp',
          roleColor: '#f0dacb'
        },
        alonzo: {
          author: 'alonzo',
          avatar: '/alonzo.webp',
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
  
  return (pageLoaded === false) ? null :  <div className="bg-gray-800 flex flex-col min-h-screen">
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
    <ScrollButton scrollToTop={scrollToTop}  />
  )}
</div>
<html lang="en"/>
  <Navigation />
  <Component {...pageProps} />
  <Footer />
</div>}

export default MyApp
