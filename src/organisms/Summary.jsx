import { Divider, Grid } from "@mui/material";
import { Paragraph, Subtitle } from "../atoms";

export default Summary = (props) => {
    const { title, value } = props;
    return (
      <Grid>
        <Subtitle title={title}/>
        <Divider/>
        <Paragraph value={value}/>
      </Grid>
    );
};
  
const styles = {
    light: {},
    dark: {},
};
  