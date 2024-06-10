import { ButtonGroup } from '@mui/material';
import { ButtonLanguage } from '../molecules';
import { PDF } from '../../handlers/PDF';
import { ButtonIcon } from '../atoms';

export const OptionBar = (props) => {
    const { data, pdfTarget, language, changeLanguage, filename } = props;
    return (
        <ButtonGroup>
            <ButtonIcon icon="Print" onClick={()=>PDF.generateCV(data, filename)}/>
            <ButtonIcon icon="Camera" onClick={()=>PDF.captureFromHTML(pdfTarget, filename)}/>
            <ButtonLanguage text={language} onClick={changeLanguage} />
        </ButtonGroup>
    )
}