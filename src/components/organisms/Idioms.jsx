import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { Idiom } from "../molecules";

export const Idioms = (props) => {
	const { title, items, selectedStyle} = props;
	return (
		<Grid>
			<Subtitle value={title} selectedStyle={selectedStyle}/>
			<Divider color="white"/>
			<Grid>
				{items.map((item, i) => (
					<Idiom
						key={`${title}${i}`}
						language={item.value}
						level={item.level}
						selectedStyle={selectedStyle}
					/>
				))}
			</Grid>
		</Grid>
	);
};
