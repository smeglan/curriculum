import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { ItemWithIcon } from "../molecules";

export const ListWithIcons = (props) => {
	const { title, values } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider />
			<ul>
				{values.map((value, i) => (
					<ItemWithIcon
						key={`${title}${i}`}
						type={value.type||null}
						tag={value.tag}
						url={value.url||null}
					/>
				))}
			</ul>
		</Grid>
	);
};
