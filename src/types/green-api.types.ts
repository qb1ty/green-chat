export type ChatContact = {
	id: string
	name: string
}

export type SendMessageResponse = {
	idMessage: string
}

export type ReceiveNotificationResponse = {
	receiptId: number
	body: {
		typeWebhook: string
		idMessage: string
		timestamp: number
		senderData: {
			chatId: string
			sender: string
			senderName: string
		}
		messageData: {
			typeMessage: string
			textMessageData?: {
				textMessage: string
			}
			extendedTextMessageData?: {
				text: string
			}
		}
	}
}

export type DeleteNotificationResponse = {
	result: boolean
}
