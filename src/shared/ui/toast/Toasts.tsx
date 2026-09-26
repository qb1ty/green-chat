import { AnimatePresence } from "motion/react"
import { useSyncExternalStore } from "react"

import Toast from "./Toast"
import { getSnapshot, subscribe } from "@/shared/lib"

export default function Toasts() {
	const toasts = useSyncExternalStore(subscribe, getSnapshot)

	return (
		<div className="pointer-events-none fixed left-1/2 top-6 z-50 flex w-full max-w-sm -translate-x-1/2 justify-center">
			<div className="grid w-max justify-items-center">
				<AnimatePresence>
					{toasts.map((toast, index) => (
						<Toast key={toast.id} toast={toast} index={index} />
					))}
				</AnimatePresence>
			</div>
		</div>
	)
}
