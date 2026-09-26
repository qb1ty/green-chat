import { type SubmitEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

import { toast } from "@/shared/lib"
import { loginValidation, setStorageData } from "@/shared/utils"

export const useLoginForm = () => {
	const [apiUrl, setApiUrl] = useState<string>("")
	const [idInstance, setIdInstance] = useState<string>("")
	const [apiTokenInstance, setApiTokenInstance] = useState<string>("")

	const navigate = useNavigate()

	const authonticate = () => {
		const errorMsg = loginValidation([apiUrl, idInstance, apiTokenInstance])

		if (errorMsg) {
			toast.error("Ошибка", errorMsg)

			return false
		}

		setStorageData("api_url", apiUrl)
		setStorageData("id_instance", idInstance)
		setStorageData("api_token_instance", apiTokenInstance)

		return true
	}

	const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()

		const isSuccess = authonticate()

		if (isSuccess) {
			navigate("/chat")

			toast.success("Успех", "Вы успешно вошли в аккаунт")
		}
	}

	return {
		apiUrl,
		idInstance,
		apiTokenInstance,
		setApiUrl,
		setIdInstance,
		setApiTokenInstance,
		handleSubmit
	}
}
