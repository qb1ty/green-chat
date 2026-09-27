import { useQuery } from "@tanstack/react-query"

import { greenApiService } from "@/app/api/green-api.client"
import { useChatStore } from "@/store/chat.store"

export const usePolling = () => {
	const addMessage = useChatStore(state => state.addMessage)

	return useQuery({
		queryKey: ["green-api-polling"],
		queryFn: async () => {
			const response = await greenApiService.receiveNotification()

			if (!response) return null

			const { receiptId, body } = response

			const isMessageEvent =
				body?.typeWebhook === "incomingMessageReceived" ||
				body?.typeWebhook === "outgoingMessageReceived" ||
				body?.typeWebhook === "outgoingAPIMessageReceived"

			if (isMessageEvent && body?.messageData) {
				const chatId = body.senderData.chatId.replace("@c.us", "")
				const typeMessage = body.messageData.typeMessage

				let text = ""

				if (typeMessage === "textMessage") {
					text = body.messageData.textMessageData?.textMessage || ""
				} else if (typeMessage === "extendedTextMessage") {
					text = body.messageData.extendedTextMessageData?.text || ""
				}

				if (text) {
					addMessage(chatId, {
						id: body.idMessage,
						text,
						isMine: body.typeWebhook.startsWith("outgoing"),
						timestamp: body.timestamp * 1000
					})
				}
			}

			await greenApiService.deleteNotification(receiptId)

			return response || null
		},
		refetchInterval: 3000
	})
}
