import { create } from "zustand"

import type { Message } from "@/types"

interface ChatState {
	activeChatId: string | null
	messages: Record<string, Message[]>
	setActiveChat: (chatId: string | null) => void
	addMessage: (chatId: string, message: Message) => void
	updateMessageId: (chatId: string, oldId: string, newId: string) => void
}

export const useChatStore = create<ChatState>(set => ({
	activeChatId: null,
	messages: {},
	setActiveChat: chatId => set({ activeChatId: chatId }),
	addMessage: (chatId, message) =>
		set(state => {
			const chatMessage = state.messages[chatId] || []

			if (chatMessage.some(msg => msg.id === message.id)) {
				return state
			}

			return {
				messages: {
					...state.messages,
					[chatId]: [...chatMessage, message]
				}
			}
		}),
	updateMessageId: (chatId, oldId, newId) =>
		set(state => {
			const chatMessages = state.messages[chatId] || []

			if (chatMessages.some(m => m.id === newId)) {
				return {
					messages: {
						...state.messages,
						[chatId]: chatMessages.filter(m => m.id !== oldId)
					}
				}
			}

			return {
				messages: {
					...state.messages,
					[chatId]: chatMessages.map(msg =>
						msg.id === oldId ? { ...msg, id: newId } : msg
					)
				}
			}
		})
}))
