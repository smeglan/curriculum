import { CustomButton } from '../atoms/Button';

export const ButtonLanguage = (props) => {
    const { text, onClick } = props;
    return (
        <CustomButton startIcon="Language" text={text} onClick={onClick} />
    )
}