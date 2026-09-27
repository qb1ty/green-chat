import { useMutation } from "@tanstack/react-query"

import { greenApiService } from "@/app/api/green-api.client"
import { toast } from "@/shared/lib"
import { useChatStore } from "@/store/chat.store"

export const useSendMessage = () => {
	const addMessage = useChatStore(state => state.addMessage)
	const updateMessageId = useChatStore(state => state.updateMessageId)

	return useMutation({
		mutationFn: ({
			chatId,
			message
		}: {
			chatId: string
			message: string
		}) => greenApiService.sendMessage(chatId, message),
		onMutate: async ({ chatId, message }) => {
			const tempId = crypto.randomUUID()

			addMessage(chatId, {
				id: tempId,
				text: message,
				isMine: true,
				timestamp: Date.now()
			})

			return { tempId }
		},
		onSuccess: (data, variables, context) => {
			if (context?.tempId && data.idMessage) {
				updateMessageId(
					variables.chatId,
					context.tempId,
					data.idMessage
				)
			}
		},
		onError: () => {
			toast.error(
				"Ошибка",
				"Не удалось отправить сообщение. Проверьте подключение."
			)
		}
	})
}
