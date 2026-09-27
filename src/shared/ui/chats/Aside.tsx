import { AsideChatItem } from "./aside-ui/AsideChatItem"
import { AsideCreateChat } from "./aside-ui/AsideCreateChat"
import { AsideLogout } from "./aside-ui/AsideLogout"
import { useGetChats } from "@/hooks"

export default function Aside() {
	const { data: chats, isLoading } = useGetChats()

	return (
		<aside className="h-full w-full p-4 sm:p-6">
			<div
				className="
                    flex flex-col overflow-hidden
                    bg-(--bg-secondary) shadow-xl
                    border border-white/5 rounded-2xl
                    h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)]
                "
			>
				<AsideCreateChat />

				<div className="flex-1 overflow-y-auto p-3 space-y-1">
					{isLoading ? (
						<div className="flex h-full items-center justify-center text-xs font-medium text-zinc-500">
							Загрузка чатов...
						</div>
					) : chats?.length === 0 ? (
						<div className="flex h-full items-center justify-center text-xs font-medium text-zinc-500">
							Нет активных диалогов
						</div>
					) : (
						chats?.map(chat => (
							<AsideChatItem
								key={chat.id}
								chatId={chat.cleanId}
								name={chat.name}
							/>
						))
					)}
				</div>

				<AsideLogout />
			</div>
		</aside>
	)
}
