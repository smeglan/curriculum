import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { ItemWithIcon } from "../molecules";

export const List = (props) => {
	const { title, items, selectedStyle } = props;
	return (
		<Grid>
			<Subtitle value={title} selectedStyle={selectedStyle} />
			<Divider color="white"/>
			<Grid>
				{items.map((item, i) => (
					<ItemWithIcon key={`${title}${i}`} value={item} selectedStyle={selectedStyle}/>
				))}
			</Grid>
		</Grid>
	);
};
