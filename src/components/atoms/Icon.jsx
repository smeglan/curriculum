import {
	Phone,
	Smartphone,
	Email,
	GitHub,
	LinkedIn,
	Print,
	Language
} from "@mui/icons-material";

export const Icon = (props) => {
	const {
		source,
		size = "100%",
		isDevIcon = false,
		alt = "No description",
		selectedStyle = "default",
	} = props;
	const iconTypes = {
		Email: Email,
		GitHub: GitHub,
		Language: Language,
		LinkedIn: LinkedIn,
		Phone: Phone,
		Print: Print,
		Smartphone: Smartphone,

	};
	if (isDevIcon) {
		return <img selectedStyle={{ width: size || `${size}rem` }} src={source} alt={`${alt}`} />;
	}
	const SelectedIcon = iconTypes[source] || Phone;
	return (
		<SelectedIcon
			fontSize={size}
			style={styles[selectedStyle]}
		/>
	);
};

const styles = {
	default: {
		verticalAlign: "middle"
	},
	dark: {
		verticalAlign: "middle",
		color: "white",
	},
};
