import { useEffect, useRef } from "react"

import type { Message } from "@/types"

interface IMessageList {
	messages: Message[]
}

export default function MessageList({ messages }: IMessageList) {
	const scrollRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight
		}
	}, [messages])

	return (
		<main
			ref={scrollRef}
			className="flex-1 overflow-y-auto py-4 space-y-4 pr-2"
		>
			{messages.length === 0 ? (
				<div className="flex h-full items-center justify-center text-sm font-medium text-zinc-500">
					Отправьте первое сообщение...
				</div>
			) : (
				messages.map(msg => (
					<div
						key={msg.id}
						className={`flex w-full ${msg.isMine ? "justify-end" : ""}`}
					>
						<div
							className={`
                                max-w-[85%] sm:max-w-[70%] px-4 py-2.5 shadow-sm
                                rounded-2xl text-sm text-white
                                ${
									msg.isMine
										? "bg-green-500 rounded-tr-sm"
										: "bg-(--bg-secondary) rounded-tl-sm"
								}
                            `}
						>
							<p className="font-raleway leading-relaxed whitespace-pre-wrap">
								{msg.text}
							</p>
							<span
								className={`mt-1 block text-right text-[10px] font-medium ${
									msg.isMine
										? "text-green-200"
										: "text-zinc-500"
								}`}
							>
								{new Date(msg.timestamp).toLocaleTimeString(
									[],
									{
										hour: "2-digit",
										minute: "2-digit"
									}
								)}
							</span>
						</div>
					</div>
				))
			)}
		</main>
	)
}
