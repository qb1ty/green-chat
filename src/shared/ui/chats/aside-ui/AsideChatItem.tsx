import { MessageSquare } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

interface IAsideChatItem {
	chatId: string
	name?: string
}

export const AsideChatItem = ({ chatId, name }: IAsideChatItem) => {
	const navigate = useNavigate()
	const { chatId: activeChatId } = useParams()

	const isActive = activeChatId === chatId

	return (
		<div
			onClick={() => navigate(`/chat/${chatId}`)}
			className={`
                flex items-center gap-3 p-2 rounded-xl cursor-pointer transition-colors
                ${isActive ? "bg-white/10" : "hover:bg-white/5"}
            `}
		>
			<div
				className={`
                    flex shrink-0 items-center justify-center h-12 w-12 rounded-full
                    ${
						isActive
							? "bg-green-500/20 text-green-400"
							: "bg-emerald-500/10 text-emerald-500"
					}
                `}
			>
				<MessageSquare size={20} />
			</div>
			<div className="min-w-0 flex-1">
				<h4 className="truncate font-raleway text-sm font-bold text-white">
					{name || chatId}
				</h4>
				<p className="truncate text-xs font-medium text-zinc-500">
					Нажмите, чтобы открыть чат...
				</p>
			</div>
		</div>
	)
}
