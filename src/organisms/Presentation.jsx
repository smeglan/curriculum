import { Divider, Grid } from "@mui/material";
import { AvatarSphere, NameTag, Title } from "../atoms";

export const Presentation = (props) => {
	const { image, name, position } = props;
	return (
		<Grid>
			<AvatarSphere src={image} />
			<NameTag value={name} />
			<Divider></Divider>
			<Title message={position} />
		</Grid>
	);
};
