import { ArrowLeft, User } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface IChatHeader {
	chatId: string
}

export default function ChatHeader({ chatId }: IChatHeader) {
	const navigate = useNavigate()

	return (
		<header
			className="
                flex shrink-0 items-center justify-between px-4 py-3 
                bg-(--bg-secondary) border-b border-white/5 shadow-sm
                rounded-2xl
            "
		>
			<div className="flex items-center gap-3">
				<button
					onClick={() => navigate("/chat")}
					className="sm:hidden p-2 -ml-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
				>
					<ArrowLeft size={22} />
				</button>

				<div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
					<User size={20} />
				</div>

				<div className="flex flex-col">
					<h2 className="font-raleway text-sm font-bold text-white">
						{chatId}
					</h2>
				</div>
			</div>
		</header>
	)
}
