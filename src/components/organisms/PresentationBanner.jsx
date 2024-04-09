import { Grid } from "@mui/material";
import { NameTag, Title } from "../atoms";

export const PresentationBanner = (props) => {
	const { name, position } = props;
	return (
		<Grid style={styles.grid} marginTop={6} marginBottom={4} paddingX={{ xs: 2}}>
			<Grid container justifyContent="center">
				<NameTag value={name} />
			</Grid>
			<Grid container justifyContent="center">
				<Title message={position} />
			</Grid>
		</Grid>
	);
};

const styles = {
	grid: { backgroundColor: "#FFBF00" },
};
