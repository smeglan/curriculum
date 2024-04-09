import { Route } from "react-router-dom";
import { Curriculum } from "../pages/Curriculum";

export const CurriculumRoutes = (
	<Route path="/" element={<Curriculum />}>
		<Route path="/:language" element={<Curriculum />} />
	</Route>
);
