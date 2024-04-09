import { IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Icon, Label } from '.';

const theme = createTheme({
   palette: {
      primary: {
         main: '#171717',
         light: '#F5EBFF',
         contrastText: '#47008F',
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
