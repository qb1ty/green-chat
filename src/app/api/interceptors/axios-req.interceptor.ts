import type { InternalAxiosRequestConfig } from "axios"

export const axiosReqInterceptor = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	const apiUrl = localStorage.getItem("api_url")
	const idInstance = localStorage.getItem("id_instance")
	const apiTokenInstance = localStorage.getItem("api_token_instance")

	if (apiUrl && idInstance && apiTokenInstance) {
		config.baseURL = apiUrl

		const parts = config.url?.split("/").filter(Boolean) || []

		if (parts.length > 0) {
			const action = parts[0]
			const params = parts.slice(1).join("/")

			config.url = `/waInstance${idInstance}/${action}/${apiTokenInstance}${
				params ? `/${params}` : ""
			}`
		}
	}

	return config
}
