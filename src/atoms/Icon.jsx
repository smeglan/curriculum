import { Phone, Smartphone, Email } from "@mui/icons-material";

export const Icon = (props) => {
	const { type, size } = props;
    const iconTypes = {
        Smartphone,
        Phone,
        Email
    };
	const Icon = iconTypes[type]||Phone;
	return (<Icon fontSize={size}/>);
};
