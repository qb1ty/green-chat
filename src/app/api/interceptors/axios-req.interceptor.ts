import type { InternalAxiosRequestConfig } from "axios"

export const axiosReqInterceptor = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	const apiUrl = localStorage.getItem("api_url")
	const idInstance = localStorage.getItem("id_instance")
	const apiTokenInstance = localStorage.getItem("api_token_instance")

	if (apiUrl && idInstance && apiTokenInstance) {
		config.baseURL = apiUrl

		config.url = `/waInstance${idInstance}${config.url}/${apiTokenInstance}`
	}

	return config
}
