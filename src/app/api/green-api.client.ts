import { client } from "./axios.client"

export const greenApiService = {
	sendMessage: async (chatId: string, message: string) => {
		const response = await client.post("/sendMessage", {
			chatId: `${chatId}@c.us`,
			message
		})

		return response.data
	},
	receiveNotification: async () => {
		const response = await client.get("/receiveNotification")
		return response.data
	},
	deleteNotification: async (receiptId: number) => {
		const response = await client.delete(`/deleteNotification/${receiptId}`)
		return response.data
	}
}
