import { Grid } from "@mui/material";
import {
	PresentationBanner,
	List,
	ListWithIcons,
	Idioms,
	Summary,
	Experience,
	Education,
	Courses,
	Skills,
	OptionBar,
} from "../organisms";
import { AvatarSphere } from "../atoms";
import { createRef } from "react";

export const CurriculumTemplate = (props) => {
	const {
		data: {
			language,
			image,
			name,
			position,
			contactInformation,
			links,
			languages,
			hobbies,
			profile,
			experience,
			education,
			courses,
			skills,
		},
		changeLanguage
	} = props;
	const leftStyle = "dark";
	const curriculumRef = createRef();
	return (
		<Grid>
			<Grid style={{ backgroundColor: "#171717", marginBottom: 2 }}>
				<OptionBar pdfTarget={curriculumRef} language={language} changeLanguage={changeLanguage}/>
			</Grid>
			<Grid ref={curriculumRef} id="curriculum" container>
				<Grid md={3} lg={2} style={{ backgroundColor: "#171717" }} padding={2} item={true}>
					<AvatarSphere image={image} />
					<ListWithIcons
						title={contactInformation.title}
						items={contactInformation.items}
						selectedStyle={leftStyle}
					/>
					<ListWithIcons
						title={links.title}
						items={links.items}
						selectedStyle={leftStyle}
					/>
					<Idioms
						title={languages.title}
						items={languages.items}
						selectedStyle={leftStyle}
					/>
					<Skills title={skills.title} items={skills.items} selectedStyle="skills" />
					<List title={hobbies.title} items={hobbies.items} selectedStyle={leftStyle} />
				</Grid>
				<Grid md={9} lg={10} item={true} style={{backgroundColor:"white"}}>
					<PresentationBanner name={name} position={position} />
					<Grid paddingX={{ xs: 2, lg: 10 }}>
						<Summary title={profile.title} value={profile.value} />
						<Experience title={experience.title} items={experience.items} />
						<Education title={education.title} items={education.items} />
						<Courses title={courses.title} items={courses.items} />
					</Grid>
				</Grid>
			</Grid></Grid>
	);
};
