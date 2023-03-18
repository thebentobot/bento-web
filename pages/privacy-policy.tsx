import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { privacyPolicy } from "../util/privacyPolicy";

export default function PrivacyPolicy() {
	return (
		<div className="py-12 bg-gray-800 border-b border-gray-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="">
					<ReactMarkdown
						className="prose lg:prose-xl mx-auto prose-headings:text-yellow-300 prose-p:text-white prose-ul:text-white prose-strong:text-yellow-300 prose-a:text-yellow-300"
						remarkPlugins={[remarkGfm]}
					>
						{privacyPolicy}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
