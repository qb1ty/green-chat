import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

export const AsideLogout = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem("api_url")
		localStorage.removeItem("id_instance")
		localStorage.removeItem("api_token_instance")

		navigate("/")
	}

	return (
		<div className="shrink-0 border-t border-white/10 p-4">
			<button
				className="
                    flex w-full items-center justify-center gap-2 py-3 rounded-xl 
                    bg-white/5 cursor-pointer
                    text-sm font-bold text-zinc-400 
                    transition-colors hover:bg-red-500/10 hover:text-red-400
                "
				type="button"
				onClick={handleLogout}
			>
				<LogOut size={18} />
				Выйти
			</button>
		</div>
	)
}
