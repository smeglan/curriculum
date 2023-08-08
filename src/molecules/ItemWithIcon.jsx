import { Icon, Label } from "../atoms";
import { Grid } from "@mui/material";

export const ItemWithIcon = (props) => {
	const { type, tag, url, size = "small" } = props;
	return (
		<Grid>
			{type && <Icon type={type} size={size} />}
			<Label value={tag} url={url} />
		</Grid>
	);
};
