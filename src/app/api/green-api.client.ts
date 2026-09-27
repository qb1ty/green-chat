import { client } from "./axios.client"
import type {
	ChatContact,
	DeleteNotificationResponse,
	ReceiveNotificationResponse,
	SendMessageResponse
} from "@/types/green-api.types"

export const greenApiService = {
	getChats: async () => {
		const response = await client.get<ChatContact[]>("/getChats")
		return response.data
	},
	sendMessage: async (chatId: string, message: string) => {
		const response = await client.post<SendMessageResponse>(
			"/sendMessage",
			{
				chatId: `${chatId}@c.us`,
				message
			}
		)

		return response.data
	},
	receiveNotification: async () => {
		const response = await client.get<ReceiveNotificationResponse | null>(
			"/receiveNotification"
		)
		return response.data
	},
	deleteNotification: async (receiptId: number) => {
		const response = await client.delete<DeleteNotificationResponse>(
			`/deleteNotification/${receiptId}`
		)
		return response.data
	}
}
