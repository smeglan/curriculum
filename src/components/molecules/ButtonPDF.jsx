import { Grid } from '@mui/material';
import { ButtonIcon } from '../atoms';
import {PDF}from '../../handlers/PDF';

export const ButtonPDF = (props) => {
   const { targetRef, filename = "curriculum" } = props;

   const renderPDF = async () => {
      PDF.captureFromHTML(targetRef, filename);
   }
   return (
      <Grid>
         <ButtonIcon icon={"Print"} onClick={renderPDF} />
      </Grid>

   )
}

