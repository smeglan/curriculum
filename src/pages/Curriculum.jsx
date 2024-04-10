import { useParams } from "react-router-dom";
import { CurriculumTemplate } from "../components/templates/CurriculumTemplate";
import { useState } from "react";

export const Curriculum = () => {
	const { language = "esp" } = useParams();
	const [currentLanguage, setCurrentLanguage] = useState(language);
	const [data, setData] = useState(require(`../information/${language}.json`));
	const changeLanguage = () => {
		if (currentLanguage === "esp") {
			setCurrentLanguage("eng");
			setData(require(`../information/eng.json`));
			window.history.replaceState(null, "English CV", "/eng");
		} else {
			setCurrentLanguage("esp");
			setData(require(`../information/esp.json`));
			window.history.replaceState(null, "CV en Español", "/esp");
		}
	}
	return <CurriculumTemplate data={data} changeLanguage={changeLanguage} />;
};
