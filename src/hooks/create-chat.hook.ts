import { AsYouType } from "libphonenumber-js"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useCreateChat = () => {
	const [phone, setPhone] = useState<string>("")
	const navigate = useNavigate()

	const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value

		if (value.length < phone.length) {
			setPhone(value)
			return
		}

		if (!value.startsWith("+") && value.length > 0) {
			value = `+${value}`
		}

		const formatter = new AsYouType()
		const formatted = formatter.input(value)

		if (
			formatter.isValid() &&
			value.replace(/\D/g, "").length >
				formatter.getNumber()?.number.length!
		) {
			return
		}

		setPhone(formatted)
	}

	const handleCreate = () => {
		const cleanPhone = phone.replace(/\D/g, "")

		if (cleanPhone.length >= 10) {
			navigate(`/chat/${cleanPhone}`)
			setPhone("")
		}
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") handleCreate()
	}

	return {
		phone,
		handlePhoneChange,
		handleCreate,
		handleKeyDown
	}
}
