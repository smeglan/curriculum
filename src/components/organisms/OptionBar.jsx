import { ButtonGroup } from '@mui/material';
import { ButtonLanguage, ButtonPDF } from '../molecules';

export const OptionBar = (props) => {
    const { pdfTarget, language, changeLanguage, filename } = props;
    return (
        <ButtonGroup>
            <ButtonPDF targetRef={pdfTarget} options={filename} />
            <ButtonLanguage text={language} onClick={changeLanguage} />
        </ButtonGroup>
    )
}