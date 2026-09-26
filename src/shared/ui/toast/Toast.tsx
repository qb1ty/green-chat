import { AlertCircle, CheckCircle, Info, X } from "lucide-react"
import { motion } from "motion/react"
import { useEffect } from "react"

import { removeToast } from "@/shared/lib"
import type { Toast as ToastType } from "@/types"

interface IToast {
	toast: ToastType
	index: number
}

export default function Toast({ toast, index }: IToast) {
	useEffect(() => {
		const timer = setTimeout(() => {
			removeToast(toast.id)
		}, 4000)

		return () => {
			clearTimeout(timer)
		}
	}, [toast.id])

	return (
		<motion.div
			layout
			drag={index === 0 ? "x" : false}
			style={{
				gridArea: "1 / 1",
				zIndex: 50 - index,
				transformOrigin: "top center"
			}}
			initial={{ opacity: 0, y: -50, scale: 0.9 }}
			animate={{
				opacity: 1,
				y: index * 12,
				scale: 1 - index * 0.05
			}}
			exit={{
				opacity: 0,
				y: -20,
				scale: 0.9,
				transition: { duration: 0.2 }
			}}
			dragConstraints={{ left: 0, right: 0 }}
			dragElastic={0.7}
			onDragEnd={(_, { offset, velocity }) => {
				if (Math.abs(offset.x) > 100 || Math.abs(velocity.x) > 500) {
					removeToast(toast.id)
				}
			}}
			className={`pointer-events-auto relative flex w-80 items-center gap-3 rounded-2xl bg-zinc-900 p-4 shadow-2xl border border-white/10 touch-pan-y ${
				index > 0 ? "pointer-events-none" : ""
			}`}
		>
			<div className="flex shrink-0 items-center justify-center">
				{toast.type === "error" && (
					<AlertCircle
						size={20}
						strokeWidth={1.5}
						className="text-red-500"
					/>
				)}
				{toast.type === "success" && (
					<CheckCircle
						size={20}
						strokeWidth={1.5}
						className="text-green-500"
					/>
				)}
				{toast.type === "info" && (
					<Info
						size={20}
						strokeWidth={1.5}
						className="text-blue-400"
					/>
				)}
			</div>

			<div className="flex-1">
				<h4 className="font-raleway text-sm font-bold text-white leading-tight">
					{toast.title}
				</h4>
				{toast.message && (
					<p className="mt-0.5 font-raleway text-xs font-medium text-zinc-400 line-clamp-2 leading-snug">
						{toast.message}
					</p>
				)}
			</div>

			<button
				onClick={() => removeToast(toast.id)}
				className="flex shrink-0 items-center justify-center rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-white/10 hover:text-white"
			>
				<X size={16} strokeWidth={1.5} />
			</button>
		</motion.div>
	)
}
