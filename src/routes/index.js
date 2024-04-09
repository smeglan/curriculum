import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { CurriculumRoutes } from "./CurriculumRoutes";

export const Provider = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			CurriculumRoutes
		)
	);

	return <RouterProvider router={router} />;
};
