import { Grid } from "@mui/material";
import { Subtitle, Label } from "../atoms";

export const EducationItem = (props) => {
	const { title, source, date, institution, location } = props;
	console.log(source)
	return (
		<Grid xs={12} item={true}>
			<Grid container marginBottom={0}>
				<Grid xs={9} item={true}>
					<Subtitle value={title} url={source}/>
				</Grid>
				<Grid container xs={3} justifyContent="center" item={true}>
					<Subtitle value={date} />
				</Grid>
			</Grid>
			<Label value={`${institution} - ${location}`} />
		</Grid>
	);
};
