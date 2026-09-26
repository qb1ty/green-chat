import { Outlet } from "react-router-dom"

import { Toasts } from "@/shared/ui/toast"

export default function PublicLayout() {
	return (
		<div className="flex-1 min-h-screen  bg-(--bg-primary)">
			<Outlet />
			<Toasts />
		</div>
	)
}
