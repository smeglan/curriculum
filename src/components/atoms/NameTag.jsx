export const NameTag = (props) => {
	const { value, selectedStyle = "banner" } = props;
	return <h1 style={styles[selectedStyle]}>{value}</h1>;
};

const styles = {
	default: {},
	banner: {
		marginBottom: 1,
		color: "#363636",
	},
};
