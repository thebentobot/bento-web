import { useRouter } from 'next/router'

export default function NotFound() {
    const { asPath } = useRouter()
    return (
        <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-300 font-semibold tracking-wide uppercase">https://www.bentobot.xyz{asPath}</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Error 404
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              The page was not found.
            </p>
          </div>
        </div>
      </div>
    )
}