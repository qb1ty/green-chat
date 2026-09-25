export const isAuthenticated = (): boolean => {
	return (
		Boolean(localStorage.getItem("api_url")) &&
		Boolean(localStorage.getItem("id_instance")) &&
		Boolean(localStorage.getItem("api_token_instance"))
	)
}
