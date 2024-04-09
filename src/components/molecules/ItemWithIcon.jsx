import { Grid } from "@mui/material";
import { Icon, Label } from "../atoms";

export const ItemWithIcon = (props) => {
	const { type, value, url, size = "small", selectedStyle } = props;
	return (
		<Grid spacing={2} style={styles[selectedStyle]}>
			{type && <Icon color source={type} size={size} selectedStyle={selectedStyle} />}
			<Label value={value} url={url} selectedStyle={selectedStyle} />
		</Grid>
	);
};

const styles = {
	dark: {
		color: "white"
	}
}