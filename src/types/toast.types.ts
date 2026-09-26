export type ToastType = "info" | "success" | "error"

export type Toast = {
	id: string
	title: string
	message: string
	type: ToastType
}
