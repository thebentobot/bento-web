import Head from "next/head";

export default function About() {
    return (
      <div>
        <Head>
        <title>About Bento 🍱</title>
      </Head>
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              About Bento 🍱
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Bento 🍱 is a Discord bot that covers the standard features of most Discord bots, but with a few extra features and a focus on quality delivery.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Bento 🍱 was started as a project to learn JavaScript and programming in general, and is a project of continuous learning and improvement.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              What powers Bento 🍱?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Bento 🍱 is written in {" "}
                    <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        className="text-blue-400"
                    >
                        TypeScript
                    </a>{" "} and uses the {" "}
                    <a
                        href="https://discord.js.org/#/"
                        target="_blank"
                        className="text-blue-400"
                    >
                        Discord.js
                    </a>{" "} Node.js module that interacts with the {" "}
                    <a
                        href="https://discord.com/developers/docs/reference"
                        target="_blank"
                        className="text-blue-400"
                    >
                        Discord API
                    </a>.{" "} Bento 🍱 uses a {" "}
                    <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        className="text-blue-400"
                    >
                        PostgreSQL
                    </a>{" "} database.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            The Bento 🍱 website is powered by {" "}
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                        className="text-blue-400"
                    >
                        Next.js
                    </a>
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            All the source code are open-source and available on {" "}
                    <a
                        href="https://github.com/thebentobot"
                        target="_blank"
                        className="text-blue-400"
                    >
                        GitHub
                    </a>.{" "}
            </p>
          </div>
        </div>
      </div>
      </div>
      
    );
  }