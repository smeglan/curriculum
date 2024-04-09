import { Grid } from "@mui/material";
import { Subtitle, Label, Paragraph } from "../atoms";

export const JobItem = (props) => {
	const { title, date, organization, location, description } = props;
	return (
		<Grid container>
			<Grid xs={8} paddingRight={4}>
				<Subtitle value={title}/>
				<Label value={`${organization} - ${location}`} />
				<Paragraph value={description} />
			</Grid>
			<Grid container xs={4} paddingTop={4} justifyContent="end">
				<Label value={date} />
			</Grid>
		</Grid>
	);
};
