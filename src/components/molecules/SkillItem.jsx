import { Grid, LinearProgress } from "@mui/material";
import { Label } from "../atoms";

export const SkillItem = (props) => {
	const { value, level = 0, selectedStyle } = props;
	return (
		<Grid xs={12} item={true} marginRight={"10%"} marginTop={1}>
			<Label value={value} selectedStyle={selectedStyle}/>
			<LinearProgress color="warning" variant="determinate" value={level} />
		</Grid>
	);
};
