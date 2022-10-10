import React from "react"
import { motion } from 'framer-motion'

    export default function ScrollButton({scrollToTop}: any) {
      return (<motion.div onClick={scrollToTop} className="fixed p-2 rounded-lg bg-yellow-300 bottom-3 right-3 lg:bottom-5 lg:right-5 cursor-pointer" whileHover={{
  scale: 1.3
}} whileTap={{
  scale: 0.9
}}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
        </motion.div>)
    }
  
  