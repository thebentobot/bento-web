export default function Footer() {
    return (
        <div className="bg-gray-800 mt-4">
            <footer className="bg-gray-800 max-w-screen-2xl mx-auto p-4 py-6">
                <div className="flex flex-wrap">
                    <div className="w-full md:max-w-1/2 mb-4">
                        <p className="text-yellow-300 font-medium ">
                            Bento
                        </p>
                        <p className="text-sm text-gray-400">
                            Source code licensed AGPLv3
                        </p>
                    </div>
                    <div className="w-full md:max-w-1/2">
                        <p className="text-md uppercase tracking-widest mb1 text-gray-400">
                            Links
                        </p>
                        <p>
                        <a
                            href="https://github.com/thebentobot"
                            className="text-gray-300 hover:text-white"
                        >
                            GitHub
                        </a>
                        <br/>
                        <a
                            href="https://discord.gg/dd68WwP"
                            className="text-gray-300 hover:text-white"
                        >
                            Discord Support Server
                        </a>
                        <br/>
                        <a
                            href="https://www.patreon.com/bentobot"
                            className="text-gray-300 hover:text-patreon"
                        >
                            Patreon
                        </a>
                        <br/>
                        <a
                            href="https://ko-fi.com/bentobot"
                            className="text-gray-300 hover:text-kofi"
                        >
                            Ko-fi
                        </a>
                        <br/>
                        <a
                            href="https://top.gg/bot/787041583580184609"
                            className="text-gray-300 hover:text-black"
                        >
                            top.gg
                        </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}