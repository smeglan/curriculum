import { ButtonGroup } from '@mui/material';
import { ButtonLanguage, ButtonPDF } from '../molecules';

export const OptionBar = (props) => {
    const { pdfTarget, filename } = props;
    return (
        <ButtonGroup>
            <ButtonPDF targetRef={pdfTarget} options={filename} />
            <ButtonLanguage/>
        </ButtonGroup>
    )
}