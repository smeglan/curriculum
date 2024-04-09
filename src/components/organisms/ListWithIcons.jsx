import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { ItemWithIcon } from "../molecules";

export const ListWithIcons = (props) => {
	const { title, items, selectedStyle } = props;
	return (
		<Grid>
			<Subtitle value={title} selectedStyle={selectedStyle}/>
			<Divider color="white"/>
			<Grid>
				{items.map((item, i) => (
					<ItemWithIcon
						key={`${title}${i}`}
						type={item.type||null}
						value={item.value}
						url={item.url||null}
						selectedStyle={selectedStyle}
					/>
				))}
			</Grid>
		</Grid>
	);
};
