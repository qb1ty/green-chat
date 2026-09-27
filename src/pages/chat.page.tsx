import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { ChatHeader, ChatInput, MessageList } from "@/shared/ui/chat"
import { useChatStore } from "@/store/chat.store"

export default function Chat() {
	const { chatId } = useParams()

	const messages =
		useChatStore(state => (chatId ? state.messages[chatId] : undefined)) ||
		[]

	const setActiveChat = useChatStore(state => state.setActiveChat)

	useEffect(() => {
		if (chatId) {
			setActiveChat(chatId)
		}
	}, [chatId, setActiveChat])

	if (!chatId) return null

	return (
		<div className="flex h-full w-full flex-col bg-(--bg-primary) m-6">
			<ChatHeader chatId={chatId} />
			<MessageList messages={messages} />
			<ChatInput chatId={chatId} />
		</div>
	)
}
