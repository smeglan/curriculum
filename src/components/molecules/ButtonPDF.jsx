import { Grid } from '@mui/material';
import { ButtonIcon } from '../atoms';
import generatePDF from 'react-to-pdf';

export const ButtonPDF = (props) => {
   const { targetRef, filename = "curriculum" } = props;

   const renderPDF = async () => {
      generatePDF(targetRef, {
         filename: filename,
         resolution: 6,
         page: {
            margin: 20,
            format: 'A4',
            orientation: 'landscape',
         },
         overrides: {
            canvas: {
               backgroundColor: "#ffffff"
            }
         }
      });
   }
   return (
      <Grid>
         <ButtonIcon icon={"Print"} onClick={renderPDF} />

      </Grid>

   )
}

