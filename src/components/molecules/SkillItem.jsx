import { Grid, LinearProgress } from "@mui/material";
import { Label } from "../atoms";

export const SkillItem = (props) => {
	const { title, value = 0, selectedStyle } = props;
	return (
		<Grid xs={12} item={true} marginRight={"10%"} marginTop={1}>
			<Label value={title} selectedStyle={selectedStyle}/>
			<LinearProgress color="warning" variant="determinate" value={value} />
		</Grid>
	);
};
