import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
//import { JobItem } from "../molecules";
import { Chrono } from "react-chrono";

export const Experience = (props) => {
	const { title, items } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider color="#FDA228" sx={{ height: 2, width: '250px' }} />
			<Grid padding={2}>
				<Chrono

					mode="VERTICAL"
					items={items}
					enableLayoutSwitch={false}
					cardHeight={80}
					contentDetailsHeight={50}
					disableToolbar={true}
					classNames={{
						card: 'my-card',
					}}
					theme={{
						primary: '#FFBF00',
						secondary: 'white',
						cardBgColor: '#ffe79e',
						cardTitleColor: '#800000',
						titleColor: 'black',
						titleColorActive: 'black'
					}}
				/>
			</Grid>

		</Grid>
	);
};

/*export const Experience = (props) => {
	const { title, items } = props;
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider />
			<Grid>
				{items.map((item, i) => (
					<JobItem
						key={`${title}${i}`}
						title={item.title}
						date={item.date}
						organization={item.organization}
						location={item.location}
						description={item.description}
					/>
				))}
			</Grid>
		</Grid>
	);
};*/
