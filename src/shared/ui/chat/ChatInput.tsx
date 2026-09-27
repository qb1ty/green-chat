import { Send } from "lucide-react"
import { useRef, useState } from "react"

import { useSendMessage } from "@/hooks"

interface IChatInput {
	chatId: string
}

export default function ChatInput({ chatId }: IChatInput) {
	const [text, setText] = useState("")
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const { mutate, isPending } = useSendMessage()

	const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value)
		const textarea = event.target
		textarea.style.height = "auto"
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	const handleSend = () => {
		const trimmed = text.trim()
		if (!trimmed || isPending) return

		mutate({ chatId, message: trimmed })

		setText("")
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"
			textareaRef.current.focus()
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault()
			handleSend()
		}
	}

	return (
		<footer className="shrink-0 bg-(--bg-secondary) rounded-2xl border-t border-white/5 p-3 sm:p-4 mb-11">
			<div className="flex items-end gap-2 sm:gap-3">
				<div
					className="
                        flex flex-1 items-center min-h-12 rounded-xl bg-black/20 px-4 py-3 
                        transition-colors focus-within:ring-1 focus-within:ring-green-500/50
                    "
				>
					<textarea
						ref={textareaRef}
						rows={1}
						value={text}
						onChange={handleInput}
						onKeyDown={handleKeyDown}
						placeholder="Написать сообщение..."
						className="
                            w-full max-h-32
                            overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none
                            bg-transparent outline-none resize-none
                            text-sm font-medium leading-relaxed text-white placeholder-zinc-500 
                        "
					/>
				</div>

				<button
					onClick={handleSend}
					disabled={!text.trim() || isPending}
					className="
                        flex shrink-0 items-center justify-center h-12 w-12 
                        rounded-xl bg-green-500 text-white cursor-pointer shadow-lg
                        transition-all hover:bg-green-600 active:scale-95 disabled:opacity-50 disabled:active:scale-100
                    "
				>
					<Send size={20} className="ml-1" />
				</button>
			</div>
		</footer>
	)
}
