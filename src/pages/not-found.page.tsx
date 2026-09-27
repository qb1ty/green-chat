import { AlertCircle } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFoundPage() {
	return (
		<main className="flex h-screen w-full flex-col items-center justify-center bg-(--bg-primary) p-4">
			<div className="flex flex-col items-center gap-4 text-center">
				<AlertCircle size={64} className="text-zinc-500" />
				<h1 className="font-raleway text-2xl font-bold text-white">
					Страница не найдена
				</h1>
				<p className="text-sm text-zinc-400">
					Возможно, ссылка устарела или вы ошиблись в адресе.
				</p>
				<Link
					to="/"
					className="mt-4 rounded-xl bg-green-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-green-600 active:scale-95"
				>
					На главную
				</Link>
			</div>
		</main>
	)
}
