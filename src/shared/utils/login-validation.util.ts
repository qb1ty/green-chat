export const loginValidation = (values: string[]) => {
	const hasEmptyFiled = values.some(value => !value.trim().length)
	return hasEmptyFiled ? "Поля обязательны к заполнению" : null
}
