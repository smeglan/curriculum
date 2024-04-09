import { useParams } from "react-router-dom";
import { CurriculumTemplate } from "../components/templates/CurriculumTemplate";

export const Curriculum = (props) => {
	const { language = "esp" } = useParams();
	const data = require(`../information/${language}.json`);
	return <CurriculumTemplate data={data} />;
};
