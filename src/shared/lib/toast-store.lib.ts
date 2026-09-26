import type { Toast } from "@/types"

let toasts: Toast[] = []
const listeners = new Set<() => void>()

const notify = () => {
	listeners.forEach(listener => listener())
}

export const subscribe = (listener: () => void) => {
	listeners.add(listener)

	return () => {
		listeners.delete(listener)
	}
}

export const getSnapshot = () => {
	return toasts
}

export const removeToast = (id: string) => {
	toasts = toasts.filter(toast => toast.id !== id)
	notify()
}

export const createToast = (toast: Omit<Toast, "id">) => {
	const newToast = { ...toast, id: crypto.randomUUID() }
	toasts = [newToast, ...toasts].slice(0, 3)
	notify()
}

export const toast = {
	error: (title: string, message: string) =>
		createToast({ title, message, type: "error" }),
	success: (title: string, message: string) =>
		createToast({ title, message, type: "success" }),
	info: (title: string, message: string) =>
		createToast({ title, message, type: "info" })
}
