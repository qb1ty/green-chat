import { Plus } from "lucide-react"

import { useCreateChat } from "@/hooks"

export const AsideCreateChat = () => {
	const { phone, handlePhoneChange, handleCreate, handleKeyDown } =
		useCreateChat()

	return (
		<div className="shrink-0 border-b border-white/10 p-4 sm:p-5">
			<h2 className="mb-4 font-raleway text-lg font-bold text-white">
				Новый диалог
			</h2>
			<div className="flex flex-col gap-3">
				<input
					type="tel"
					value={phone}
					onChange={handlePhoneChange}
					onKeyDown={handleKeyDown}
					placeholder="Номер (например: +7 777 ...)"
					className="
                        w-full px-4 py-3 rounded-xl outline-none
                        bg-black/20 
                        text-sm font-medium text-white placeholder-zinc-500 
                        transition-all focus:ring-1 focus:ring-green-500/50
                    "
				/>
				<button
					onClick={handleCreate}
					disabled={!phone}
					className="
                        flex w-full items-center justify-center gap-2 py-3
                        bg-green-500 rounded-xl shadow-lg cursor-pointer
                        text-sm font-bold text-white 
                        transition-all hover:bg-green-600 active:scale-[0.98]
                        disabled:opacity-50 disabled:pointer-events-none
                    "
				>
					<Plus size={18} strokeWidth={2.5} />
					Создать чат
				</button>
			</div>
		</div>
	)
}
