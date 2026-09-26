import { Outlet, useLocation } from "react-router-dom"

import { Aside } from "@/shared/ui/chats"
import { Toasts } from "@/shared/ui/toast"

export default function PrivateLayout() {
	const location = useLocation()

	const isChatSelected =
		location.pathname !== "/chat" && location.pathname !== "/chat/"

	return (
		<div className="flex h-screen w-full overflow-hidden bg-(--bg-primary)">
			<div
				className={`${isChatSelected ? "hidden sm:block" : "block"} w-full sm:w-1/3 lg:w-1/4`}
			>
				<Aside />
			</div>

			<main
				className={`${!isChatSelected ? "hidden sm:flex" : "flex"} flex-1 relative min-w-0`}
			>
				<Outlet />
			</main>

			<Toasts />
		</div>
	)
}
