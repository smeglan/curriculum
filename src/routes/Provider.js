import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Idioms } from "../organisms";

const info = {
	title: "INFORMACIÓN",
	values: [
		{
			language: "Español",
			level: "Nativo",
		},
		{
			language: "Ingles",
			level: "Intermedio"
		},
	],
};

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Idioms
				title={info.title}
				values={info.values}
			/>
		),
	},
]);

export function Provider() {
	return <RouterProvider router={router} />;
}
