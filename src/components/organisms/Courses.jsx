import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { EducationItem } from "../molecules";

export const Courses = (props) => {
	const { title, items } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider color="#FDA228" sx={{ height: 2, width: '180px' }} />
			<Grid>
				{items.map((item, i) => (
					<EducationItem
						key={`${title}${i}`}
						title={item.title}
						source={item.source}
						date={item.date}
						location={item.location}
						institution={item.institution}
					/>
				))}
			</Grid>
		</Grid>
	);
};
