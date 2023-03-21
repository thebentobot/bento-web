import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { termsOfService } from "../util/termsOfService";

export default function TermsOfService() {
	return (
		<div className="py-12 bg-gray-800 border-b border-gray-500">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="">
					{/* eslint-disable-next-line react/no-children-prop*/}
					<ReactMarkdown
						className="prose lg:prose-xl mx-auto prose-headings:text-yellow-300 prose-p:text-white prose-ul:text-white prose-strong:text-yellow-300 prose-a:text-yellow-300 prose-li:text-white"
						remarkPlugins={[remarkGfm]}
					>
						{termsOfService}
					</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
