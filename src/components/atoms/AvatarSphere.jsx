import { Grid } from "@mui/material";
import { ImageRepository } from "../../handlers/ImageRepository";
export const AvatarSphere = (props) => {
	const { image } = props;
	return (
		<Grid container justifyContent="center">
			<img
				src={ImageRepository[image]}
				style={
					{ borderRadius: "50%", width: "80%", height:"auto" }
				}
				alt={"profile"}
			/>
		</Grid>
	);
};
