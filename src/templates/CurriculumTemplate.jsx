import { Container, Grid } from "@mui/material";
import Certifications from "../organisms/Certifications";
import Education from "../organisms/Education";
import Experience from "../organisms/Experience";
import { Presentation, ListWithIcons, Idioms } from "../organisms";
import Summary from "../organisms/Summary";

export const CurriculumTemplate = (props) => {
	const {
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
		certifications,
		skills
	} = props;
	return (
		<Container maxWidth="xs">
			<Grid sm={12} md={4}>
				<Presentation image={image} name={name} position={position} />
				<ListWithIcons
					title={contactInformation.title}
					values={contactInformation.values}
				/>
				<ListWithIcons title={links.title} values={links.values} />
				<Idioms title={languages.title} values={languages.values} />
				<ListWithIcons title={hobbies.title} values={hobbies.values} />
			</Grid>
			<Grid sm={12} md={8}>
				<Summary title={profile.title} value={profile.value}/>
				
				<Experience title={experience.title} values={experience.values}/>
				<Education title={education.title} values={education.values}/>
				<Certifications title={certifications.title} values={certifications.values}/>
				<Skills title={skills.title} values={skills.values}/>
			</Grid>
		</Container>
	);
};
