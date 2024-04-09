import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { SkillItem } from "../molecules";

export const Skills = (props) => {
	const { title, items, selectedStyle } = props;
	return (
		<Grid>
			<Grid md={12} item={true}>
				<Subtitle value={title} selectedStyle={selectedStyle} />
			</Grid>
			<Divider color="white"/>
			{items.map((item, i) => (
				<SkillItem
					key={`skill${i}`}
					title={item.title}
					value={item.value}
					selectedStyle={selectedStyle}
				/>
			))}
		</Grid>
	);
};
