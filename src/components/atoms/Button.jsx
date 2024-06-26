import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Icon } from '.';

const theme = createTheme({
   palette: {
      primary: {
         main: '#FFFFFF',
         light: '#FFFFFF',
         contrastText: '#FFFFFF',
      },
   },
});


export const CustomButton = (props) => {
   const { text, startIcon, onClick } = props;
   return (
      <ThemeProvider theme={theme}>
         <Button
            startIcon={<Icon source={startIcon} />}
            variant="text"
            size="large"
            onClick={onClick}
            color="primary"
         >
            {text}
         </Button>
      </ThemeProvider>
   )
}
