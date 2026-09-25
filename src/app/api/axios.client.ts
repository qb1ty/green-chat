import axios from "axios"

import { axiosReqInterceptor } from "./interceptors"

export const client = axios.create({
	headers: {
		"Content-Type": "application/json"
	}
})

client.interceptors.request.use(axiosReqInterceptor, error => {
	return Promise.reject(error)
})
