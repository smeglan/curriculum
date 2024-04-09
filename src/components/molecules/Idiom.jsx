import { Label } from "../atoms";
import { Grid } from "@mui/material";

export const Idiom = (props) => {
  const { language, level, selectedStyle } = props;
  const message = `${language} | ${level}`
  return (
    <Grid>
        <Label 
          value={message}
          selectedStyle={selectedStyle}
        />
    </Grid>
  );
};
