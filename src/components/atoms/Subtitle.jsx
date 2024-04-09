export const Subtitle = (props) => {
	const { value, url, selectedStyle = "light" } = props;
	return <h4 style={styles[selectedStyle]}><a href={url} style={{ color: "inherit" }}>{value}</a></h4>;
};

const styles = {
	light: {
		marginBottom: "6px",
	},
	dark: {
		marginBottom: "6px",
		color: "white",
	},
	skills: {
		marginBottom: "6px",
		color: "white",
	},
};
