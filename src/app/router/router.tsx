import { createBrowserRouter, redirect } from "react-router-dom"

import { PrivateLayout, PublicLayout } from "../layouts"

import { ChatPage, LoginPage } from "@/pages"
import { isAuthenticated } from "@/shared/utils"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		loader: () => {
			if (isAuthenticated()) {
				return redirect("/chat")
			}

			return null
		},
		children: [
			{
				index: true,
				element: <LoginPage />
			}
		]
	},
	{
		path: "/chat",
		element: <PrivateLayout />,
		loader: () => {
			if (!isAuthenticated()) {
				return redirect("/")
			}

			return null
		},
		children: [
			{
				index: true,
				element: <ChatPage />
			},
			{
				path: ":chatId",
				element: <ChatPage />
			}
		]
	}
])
