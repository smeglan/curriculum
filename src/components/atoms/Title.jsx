export const Title = (props) => {
	const { message, selectedStyle = "red" } = props;
	return <h2 style={styles[selectedStyle]}>{message}</h2>;
};

const styles = {
	red: {
		color: "#800000",
	},
};
