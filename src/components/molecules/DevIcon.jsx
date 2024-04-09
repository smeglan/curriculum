import { Grid } from "@mui/material";
import { Icon, Label } from "../atoms";
import { ImageRepository } from "../../handlers/ImageRepository";

export const DevIcon = (props) => {
	const { title, source, size, selectedStyle, isLocal = false } = props;
	let newSource;
	if (isLocal) {
		newSource = ImageRepository[source];
	}else{
		newSource= source;
	}
	
	return (
		<Grid xs={3} md={3} lg={1} padding={1}>
			<Grid>
				<Icon source={newSource} size={size} isDevIcon={true} alt={title} />
			</Grid>
			<Grid container justifyContent={"center"}>
				<Label className={"Icon"} value={title} selectedStyle={selectedStyle} />
			</Grid>
		</Grid>
	);
};
