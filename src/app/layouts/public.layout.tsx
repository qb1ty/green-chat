import { Outlet } from "react-router-dom"

export default function PublicLayout() {
	return (
		<div className="flex-1 bg-(--bg-primary)">
			<Outlet />
		</div>
	)
}
