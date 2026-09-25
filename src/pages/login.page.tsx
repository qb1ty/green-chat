export default function LoginPage() {
	return (
		<main className="relative flex h-screen w-full items-center justify-center p-4 z-0">
			<form
				className="flex w-full max-w-md flex-col gap-5 rounded-3xl bg-zinc-800 p-8 shadow-xl border border-white/5"
				onSubmit={e => e.preventDefault()}
			>
				<div className="mb-2 flex flex-col gap-1 text-center">
					<h1 className="font-raleway text-2xl font-bold text-white">
						Вход в систему
					</h1>
					<p className="font-raleway text-sm text-zinc-400">
						Введите ключи доступа Green-API
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="apiUrl"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						API URL
					</label>
					<input
						id="apiUrl"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-green-500 focus:bg-zinc-900 focus:ring-1 focus:ring-green-500
							w-full px-4 py-3
						"
						placeholder="https://0000.api.green-api.com"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="idInstance"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						ID Instance
					</label>
					<input
						id="idInstance"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-green-500 focus:bg-zinc-900 focus:ring-1 focus:ring-green-500
							w-full px-4 py-3
						"
						placeholder="1234567890"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="apiTokenInstance"
						className="ml-1 font-raleway text-sm font-semibold text-zinc-300"
					>
						API Token Instance
					</label>
					<input
						id="apiTokenInstance"
						type="text"
						className="
							bg-zinc-900/60 border border-white/10 hover:border-white/20 rounded-xl 
							font-raleway font-medium text-white outline-none placeholder:text-zinc-600
							transition-all focus:border-green-500 focus:bg-zinc-900 focus:ring-1 focus:ring-green-500
							w-full px-4 py-3
						"
						placeholder="abcdef123456..."
					/>
				</div>

				<button
					type="submit"
					className="
						bg-green-600 outline-green-600
						font-raleway font-bold text-white
						shadow-lg shadow-green-900/20 rounded-xl
						transition-all hover:bg-green-500 active:scale-[0.98]
						mt-4 w-full px-4 py-3.5
					"
				>
					Продолжить
				</button>
			</form>
		</main>
	)
}
