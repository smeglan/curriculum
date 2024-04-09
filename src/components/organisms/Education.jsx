import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { EducationItem } from "../molecules";

export const Education = (props) => {
	const { title, items } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider color="#FDA228" sx={{ height: 2, width: '140px' }} />
			<Grid container>
				{items.map((item, i) => (
					<EducationItem
						key={`${title}${i}`}
						title={item.title}
						date={item.date}
						location={item.location}
						institution={item.institution}
					/>
				))}
			</Grid>
		</Grid>
	);
};
