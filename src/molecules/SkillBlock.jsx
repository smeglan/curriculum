import { LinearProgress } from "@mui/material";
import Subtitle from "../atoms/Subtitle";
export default Paragraph = (props) => {
  const { title, value } = props;
  return (
    <div>
      <Subtitle title={title}/>
      <LinearProgress variant="buffer" value={value} valueBuffer={100} />
    </div>
  );
};

const styles = {
  light: {},
  dark: {},
};
