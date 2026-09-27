import { AlertTriangle } from "lucide-react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorBoundaryPage() {
	const error = useRouteError()

	let errorMessage = "Произошла непредвиденная ошибка."

	if (isRouteErrorResponse(error)) {
		errorMessage = error.data?.message || error.statusText
	} else if (error instanceof Error) {
		errorMessage = error.message
	}

	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-(--bg-primary) p-4">
			<div className="flex max-w-md flex-col items-center gap-4 text-center">
				<AlertTriangle size={64} className="text-red-500" />
				<h1 className="font-raleway text-2xl font-bold text-white">
					Что-то пошло не так
				</h1>
				<p className="text-sm text-zinc-400 wrap-break-word w-full">
					{errorMessage}
				</p>
				<button
					onClick={() => window.location.assign("/")}
					className="mt-4 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-600 active:scale-95"
				>
					Перезагрузить приложение
				</button>
			</div>
		</main>
	)
}
