import { Divider, Grid } from "@mui/material";
import { Subtitle } from "../atoms";
//import { JobItem } from "../molecules";
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";

export const Experience = (props) => {
	const { title, items } = props;
	const [fixedItems, setFixedItems] = useState([]);
	useEffect(()=>{
		const newFixedItems=[];
		for (const item of items) {
			newFixedItems.push({
				cardTitle: item.title,
				cardSubtitle: item.company,
				title: item.date,
				cardDetailedText: item.description
			});
		}
		setFixedItems(newFixedItems);
	}, [items])
	return (
		<Grid>
			<Subtitle value={title} />
			<Divider color="#FDA228" sx={{ height: 2, width: '250px' }} />
			<Grid padding={2}>
				<Chrono
					allowDynamicUpdate = {true}
					mode="VERTICAL"
					items={fixedItems}
					enableLayoutSwitch={false}
					cardHeight={81}
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
