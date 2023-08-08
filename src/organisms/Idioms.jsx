import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
import { Idiom } from "../molecules";

export const Idioms = (props) => {
	const { title, values } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider/>
			<ul>
				{values.map((value, i) => (
					<Idiom
            language = {value.language}
            level = {value.level}
          />
				))}
			</ul>
		</Grid>
	);
};

const styles = {
	light: {},
	dark: {},
};
