import { IconButton } from '@mui/material';
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


export const ButtonIcon = (props) => {
   const { icon, onClick } = props;
   return (
      <ThemeProvider theme={theme}>
         <IconButton
            size="large"
            onClick={onClick}
            color="primary"
         >
            <Icon source={icon} />
         </IconButton>
      </ThemeProvider>
   )
}
