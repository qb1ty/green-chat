import { createBrowserRouter, redirect } from "react-router-dom"

import { PrivateLayout, PublicLayout } from "../layouts"

import { ChatPage, LoginPage } from "@/pages"
import { isAuthenticated } from "@/shared/utils"
import NotFoundPage from "@/pages/not-found.page"
import ErrorBoundaryPage from "@/pages/error-boundary.page"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <PublicLayout />,
		errorElement: <ErrorBoundaryPage />,
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
		errorElement: <ErrorBoundaryPage />,
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
	},
	{
		path: "*",
		element: <NotFoundPage />
	}
])
