import { useQuery } from "@tanstack/react-query"

import { greenApiService } from "@/app/api/green-api.client"

export const useGetChats = () => {
	return useQuery({
		queryKey: ["green-api-chats"],
		queryFn: async () => {
			const chats = await greenApiService.getChats()
			return chats
				.filter(chat => chat.id.endsWith("@c.us"))
				.map(chat => ({
					...chat,
					cleanId: chat.id.replace("@c.us", "")
				}))
		},
		refetchInterval: 60000
	})
}
