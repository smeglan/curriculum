import { Divider, Grid } from "@mui/material";
import { Paragraph, Subtitle } from "../atoms";

export const Summary = (props) => {
  const { title, value } = props;
  return (
    <Grid>
      <Subtitle value={title} />
      <Divider color="#FDA228" sx={{ height: 2, width: '92px' }} />
      <Paragraph value={value} />
    </Grid>
  );
};
