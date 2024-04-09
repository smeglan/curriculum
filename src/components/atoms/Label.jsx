export const Label = (props) => {
	const { value, url = null, selectedStyle = "light" } = props;
	return (
		<label style={styles[selectedStyle]}>
			<a href={url} style={{ color: "inherit" }}>{value}</a>
		</label>
	);
};
const styles = {
	skills: {
		color: "white",
		fontSize: 18
	},
	light: {
		verticalAlign: "middle",
	},
	dark: {
		verticalAlign: "middle",
		color: "white",
	}
};
